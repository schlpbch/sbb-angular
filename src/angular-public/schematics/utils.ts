import { SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import {
  addPackageJsonDependency,
  NodeDependency,
  NodeDependencyType,
} from '@schematics/angular/utility/dependencies';
import { getPackageJsonDependency } from '@schematics/angular/utility/dependencies';

/** Gets the version of the specified package by looking at the package.json in the given tree. */
export function getPackageVersionFromPackageJson(tree: Tree, name: string): string | null {
  const dependency = getPackageJsonDependency(tree, name);

  if (!dependency) {
    return null;
  }

  return dependency.version;
}

/** Assert that file exists and parse json file to object */
export function readJsonFile(tree: Tree, path: string) {
  if (!tree.exists(path)) {
    throw new SchematicsException(path + ' not found');
  }
  return JSON.parse(tree.read(path)!.toString('utf-8'));
}

/** Assert that file exists and parse string file */
export function readStringFile(tree: Tree, path: string) {
  if (!tree.exists(path)) {
    throw new SchematicsException(path + ' not found');
  }
  return tree.read(path)!.toString('utf-8');
}

/** Adds a default dependency to package.json */
export function addDefaultDependency(
  name: string,
  version: string,
  host: Tree,
  context?: SchematicContext
): Tree {
  const nodeDependency: NodeDependency = {
    type: NodeDependencyType.Default,
    name: name,
    version: version,
    overwrite: false,
  };
  addPackageJsonDependency(host, nodeDependency);
  if (context) {
    context.logger.info(`✔️ Added ${name} dependency`);
  }
  return host;
}
