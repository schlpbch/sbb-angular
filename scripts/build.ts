#!/usr/bin/env node

import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import minimist from 'minimist';
import { join } from 'path';

const { chmod, cp, mkdir, rm, set, test } = require('shelljs');

// ShellJS should exit if a command fails.
set('-e');

/** Name of the Bazel tag that will be used to find release package targets. */
const releaseTargetTag = 'release-package';

/** Path to the project directory. */
const projectDir = join(__dirname, '../');

/** Command that runs Bazel. */
const bazelCmd = process.env.BAZEL_COMMAND || `yarn -s bazel`;

if (module === require.main) {
  const options = minimist(process.argv.slice(2));
  const target = options._[0];
  if (!target) {
    throw new Error('Target parameter required');
  }

  if (target === 'all') {
    buildAllTargets();
  } else if (target === 'packages') {
    /**
     * Builds the release packages with the default compile mode and
     * output directory.
     */
    buildReleasePackages(false, join(projectDir, 'dist/releases'));
  } else if (target === 'showcase') {
    buildShowcase(join(projectDir, 'dist/releases'));
  }
}

/**
 * Builds all available targets, except the release packages and the prod showcase.
 */
function buildAllTargets() {
  exec(`${bazelCmd} build src/... --build_tag_filters=-release-package,-prod-showcase`);
}

/**
 * Builds the release packages with the given compile mode and copies
 * the package output into the given directory.
 */
function buildReleasePackages(useIvy: boolean, distPath: string) {
  console.log('######################################');
  console.log('  Building release packages...');
  console.log(`  Compiling with Ivy: ${useIvy}`);
  console.log('######################################');

  /** Command that queries Bazel for all release package targets. */
  const queryPackagesCmd =
    `${bazelCmd} query --output=label "attr('tags', '\\[.*${releaseTargetTag}.*\\]', //src/...) ` +
    `intersect kind('.*_package', //src/...)"`;

  // List of targets to build. e.g. "src/angular-business:npm_package", or "src/angular-public:npm_package".
  const targets = exec(queryPackagesCmd, true).split(/\r?\n/);
  const packageNames = getPackageNamesOfTargets(targets);
  const bazelBinPath = exec(`${bazelCmd} info bazel-bin`, true);
  const getOutputPath = (pkgName: string) => join(bazelBinPath, 'src', pkgName, 'npm_package');

  // Walk through each release package and clear previous "npm_package" outputs. This is
  // a workaround for: https://github.com/bazelbuild/rules_nodejs/issues/1219. We need to
  // do this to ensure that the version placeholders are properly populated.
  packageNames.forEach((pkgName) => {
    const outputPath = getOutputPath(pkgName);
    if (test('-d', outputPath)) {
      chmod('-R', 'u+w', outputPath);
      rm('-rf', outputPath);
    }
  });

  // Build with "--config=release" so that Bazel runs the workspace stamping script. The
  // stamping script ensures that the version placeholder is populated in the release output.
  exec(
    `${bazelCmd} build --config=release --config=${useIvy ? 'ivy' : 'view-engine'} ${targets.join(
      ' '
    )}`
  );

  cleanDistPath(distPath);

  // Copy the package output into the specified distribution folder.
  packageNames.forEach((pkgName) => {
    const outputPath = getOutputPath(pkgName);
    const targetFolder = join(distPath, pkgName);
    copyPackageOutput(outputPath, targetFolder);
  });
}

/**
 * Builds the showcase with ivy and copies the package output into the given directory.
 */
function buildShowcase(distPath: string) {
  console.log('######################################');
  console.log('  Building showcase...');
  console.log('######################################');

  const pkgName = 'showcase';

  exec(`${bazelCmd} build src/${pkgName}:prodapp`);

  cleanDistPath(distPath);
  const bazelBinPath = exec(`${bazelCmd} info bazel-bin`, true);
  const outputPath = join(bazelBinPath, 'src', pkgName, 'prodapp');
  const targetFolder = join(distPath, pkgName);
  copyPackageOutput(outputPath, targetFolder);

  // TODO: Remove once dockerized
  // Create package.json
  const { version } = require('../package.json');
  writeFileSync(
    join(targetFolder, 'package.json'),
    JSON.stringify({
      name: '@sbb-esta/angular-showcase',
      version,
      publishConfig: { access: 'public' },
    }),
    'utf8'
  );
}

/**
 * Gets the package names of the specified Bazel targets.
 * e.g. //src/angular-public:npm_package -> public
 */
function getPackageNamesOfTargets(targets: string[]) {
  return targets.map((targetName) => {
    const matches = targetName.match(/\/\/src\/(.*):npm_package/);
    if (matches === null) {
      throw Error(
        `Found Bazel target with "${releaseTargetTag}" tag, but could not ` +
          `determine release output name: ${targetName}`
      );
    }
    return matches[1];
  });
}

/**
 * Delete the distribution directory so that the output is guaranteed to be clean. Re-create
 * the empty directory so that we can copy the release packages into it later.
 */
function cleanDistPath(distPath: string) {
  rm('-rf', distPath);
  mkdir('-p', distPath);
}

/**
 * Copy the package output into the specified distribution folder.
 */
function copyPackageOutput(outputPath: string, targetFolder: string) {
  console.log(`> Copying package output to "${targetFolder}" (from "${outputPath}")`);
  cp('-R', outputPath, targetFolder);
  chmod('-R', 'u+w', targetFolder);
}

/**
 * Executes the given command in the project directory.
 * @param command The command to run
 * @param captureStdout Whether the stdout should be captured and
 *   returned.
 */
function exec(command: string): void;
function exec(command: string, captureStdout: true): string;
function exec(command: string, captureStdout = false) {
  const stdout = execSync(command, {
    cwd: projectDir,
    stdio: ['inherit', captureStdout ? 'pipe' : 'inherit', 'inherit'],
  });

  if (captureStdout) {
    process.stdout.write(stdout);
    return stdout.toString().trim();
  }
}
