const { basename, join, relative, resolve, sep } = require('path');
const { existsSync, mkdirSync, writeFile } = require('fs');
const { EOL } = require('os');
const glob = require('util').promisify(require('glob'));
const { SvgIconModule } = require('./svg-icon-module');
const { IconCollectionModule } = require('./icon-collection-module');
const writeFileAsync = require('util').promisify(writeFile);

class SvgConverter extends IconCollectionModule {
  constructor(basePath, destinationPath) {
    super([]);
    this.basePath = resolve(basePath);
    this.destinationPath = resolve(destinationPath);
  }

  _normaliseName() {
    return 'icon-collection';
  }

  async convert() {
    const svgIcons = (await glob('**/*.svg', { cwd: this.basePath, absolute: true }))
      .map(s => new SvgIconModule(this.basePath, s))
      .sort((a, b) => a.modules.length - b.modules.length || a.rootImportPath.localeCompare(b.rootImportPath))
      .filter((v, i, a) => this._resolveDuplicates(v, i, a));
    const svgCollections = svgIcons
      .map(c => c.modules)
      .reduce((current, next) => current.concat(next.map((_, i, a) => a.slice(0, i + 1))), [])
      .filter((v, i, a) => a.findIndex(m => m.join('/') === v.join('/')) === i)
      .map(m => new IconCollectionModule(m)
        .addModules(svgIcons.filter(i => i.modules.join('/') === m.join('/'))))
      .concat(this)
      .map((c, _, a) => this._resolveSubmodules(c, a));
    this._logModuleTree();
    this._createDirectories(svgCollections);
    const modules = [...svgCollections, ...svgIcons];
    await Promise.all(modules.map(async m => {
      await m.createModule(this.destinationPath);
      console.log(`Created ${m.modules.concat(m.outputFileBaseName).join('/')}`);
    }));
    await this._createEntryExports(modules);
  }

  _resolveDuplicates(icon, index, iconArray) {
    const duplicates = iconArray.filter(m => m.kebabCaseName === icon.kebabCaseName);
    if (duplicates.length === 1) {
      return true;
    } else if (iconArray.findIndex(i => i.kebabCaseName === icon.kebabCaseName) !== index) {
      return false;
    }

    console.log(`Duplicate icon selector: ${icon.kebabCaseName}`);
    duplicates.forEach(d => console.log(` - ${relative(this.basePath, d.filePath)}`));
    console.log(` -> Resolving to ${relative(this.basePath, icon.filePath)}`);
    return true;
  }

  _resolveSubmodules(collection, collectionArray) {
    const subModules = collectionArray.filter(
      m => collection.modules.length + 1 === m.modules.length
        && m.modules.join('/').startsWith(collection.modules.join('/')));
    return collection.addModules(subModules);
  }

  _logModuleTree(module = this, indent = 0) {
    console.log(`${' '.repeat(indent)}${module.pascalCaseName}`);
    module.childModules
      .filter(m => m.childModules)
      .forEach(m => this._logModuleTree(m, indent + 2));
  }

  _createDirectories(modules) {
    this.destinationPath
      .split(sep)
      .map((_, i, a) => join(...a.slice(0, i + 1)))
      .concat(...modules.map(m => join(this.destinationPath, ...m.modules)))
      .filter((p, i, a) => !existsSync(p) && a.indexOf(p) === i)
      .forEach(p => {
        console.log(p);
        mkdirSync(p);
      });
  }

  async _createEntryExports(modules) {
    const scriptPath = join(this.destinationPath, `${basename(this.destinationPath)}.ts`);
    const template = `/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
${modules.map(m => `export * from '${m.rootImportPath}';`).join(EOL)}
`;
    await writeFileAsync(scriptPath, template, 'utf8');
  }
}

exports.SvgConverter = SvgConverter;
