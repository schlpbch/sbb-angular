'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@angular-devkit/core');

const prettier = require('prettier');
function normalizeExamples() {
    return (tree, _context) => {
        const iconLookup = {};
        const iconsDir = tree.getDir('src/icons');
        iconsDir.visit(path => {
            const fileName = core.basename(path);
            if (fileName.endsWith('.module.ts') && fileName.startsWith('icon-')) {
                const key = fileName.split('.')[0];
                iconLookup[key] = {
                    path: `@sbb-esta/angular-icons/${core.relative(iconsDir.path, core.dirname(path))}`,
                    moduleName: `${core.strings.classify(key)}Module`
                };
            }
        });
        [
            'src/showcase/app/business/business-examples',
            'src/showcase/app/maps/maps-examples',
            'src/showcase/app/public/public-examples'
        ]
            .map(d => tree.getDir(d))
            .forEach(d => normalizeExampleModules(d));
        function normalizeExampleModules(dir) {
            // const moduleName = basename(dir.parent!.path);
            dir.subdirs.map(d => dir.dir(d)).forEach(d => normalizeExampleModule(d));
            const dirName = core.basename(dir.path);
            const moduleName = `${core.strings.classify(dirName)}Module`;
            const moduleImports = dir.subdirs
                .sort()
                .map(d => `import { ${core.strings.classify(d)}Module } from './${d}/${d}.module';`)
                .join('\n');
            const moduleList = dir.subdirs.map(d => `${core.strings.classify(d)}Module`).join(',\n  ');
            const content = `import { NgModule } from '@angular/core';

${moduleImports}

const EXAMPLES = [
  ${moduleList}
];

@NgModule({
  imports: EXAMPLES,
  exports: EXAMPLES
})
export class ${moduleName} {}
`;
            const formattedContent = prettier.format(content, {
                parser: 'typescript',
                ...require('../../package.json').prettier
            });
            const moduleFile = dir.file(core.fragment(`${dirName}.module.ts`));
            if (moduleFile.content.toString() !== formattedContent) {
                tree.overwrite(moduleFile.path, formattedContent);
            }
        }
        function normalizeExampleModule(dir) {
            renameShowcaseToExample(dir);
            renderModuleContent(dir);
        }
        function renameShowcaseToExample(dir) {
            dir.visit((path, entry) => {
                const relativePath = core.relative(dir.path, path);
                if (entry && relativePath.includes('showcase')) {
                    const target = core.join(dir.path, relativePath.replace(/showcase/g, 'example'));
                    const content = entry.content
                        .toString()
                        .replace(/showcase/g, 'example')
                        .replace(/Showcase/g, 'Example')
                        .replace(/SHOWCASE/g, 'EXAMPLE');
                    tree.delete(path);
                    tree.create(target, content);
                }
            });
        }
        function renderModuleContent(dir) {
            const { exampleComponents, imports } = findExampleComponentsAndImports(dir);
            const dirName = core.basename(dir.path);
            const angularModules = detectUsedAngularModules(dir);
            const formImport = angularModules.forms
                ? `import { FormsModule, ReactiveFormsModule } from '@angular/forms';`
                : '';
            const routerImport = angularModules.router
                ? `import { RouterModule } from '@angular/router';`
                : '';
            const moduleName = `${core.strings.classify(dirName)}Module`;
            const moduleImports = imports
                .map(i => `import { ${i.moduleName} } from '${i.path}';`)
                .join('\n');
            const componentImports = exampleComponents
                .map(c => `import { ${c.components.join(', ')} } from '${c.path}';`)
                .join('\n');
            const componentsList = exampleComponents
                .reduce((current, next) => current.concat(next.components), [])
                .join(',\n  ');
            let moduleList = imports.map(i => i.moduleName).join(',\n    ');
            if (angularModules.forms) {
                moduleList = `FormsModule,\n  ReactiveFormsModule,\n  ${moduleList}`;
            }
            if (angularModules.router) {
                moduleList = `RouterModule,\n  ${moduleList}`;
            }
            const content = `import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';${formImport}${routerImport}
${moduleImports}

${componentImports}

const EXAMPLES = [
  ${componentsList}
];

@NgModule({
  imports: [
    CommonModule,
    ${moduleList}
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES
})
export class ${moduleName} {}
`;
            const formattedContent = prettier.format(content, {
                parser: 'typescript',
                ...require('../../package.json').prettier
            });
            const moduleFile = dir.file(core.fragment(`${dirName}.module.ts`));
            if (moduleFile.content.toString() !== formattedContent) {
                tree.overwrite(moduleFile.path, formattedContent);
            }
        }
        function findExampleComponentsAndImports(dir) {
            const packageName = core.split(dir.path)[4];
            const exampleComponents = [];
            const moduleName = core.basename(dir.path).split('-examples')[0];
            const imports = [resolveImport(packageName, moduleName)];
            dir.visit((path, entry) => {
                if (!entry) {
                    return;
                }
                else if (path.endsWith('.ts') && !path.endsWith('module.ts')) {
                    exampleComponents.push(...findComponents(dir, entry));
                    imports.push(...findTypeScriptImports(entry));
                }
                else if (path.endsWith('.html')) {
                    imports.push(...findHtmlTagUsages(entry, packageName));
                }
            });
            return {
                exampleComponents: exampleComponents
                    .filter((v, i, a) => a.findIndex(vi => JSON.stringify(vi) === JSON.stringify(v)) === i)
                    .sort((a, b) => a.path.localeCompare(b.path)),
                imports: imports
                    .filter((v, i, a) => a.findIndex(vi => JSON.stringify(vi) === JSON.stringify(v)) === i)
                    .sort((a, b) => a.path.localeCompare(b.path))
            };
        }
        function findComponents(dir, entry) {
            var _a;
            const content = entry.content.toString();
            const components = (_a = content
                .match(/export class \w+Component/g)) === null || _a === void 0 ? void 0 : _a.map(m => m.substring(13)).sort();
            return components
                ? [{ path: `./${core.relative(dir.path, entry.path).replace(/\.ts$/, '')}`, components }]
                : [];
        }
        function findTypeScriptImports(entry) {
            var _a, _b;
            const content = entry.content.toString();
            return ((_b = (_a = content
                .match(/@sbb-esta\/angular-\w+\/[^']+/g)) === null || _a === void 0 ? void 0 : _a.filter((v, i, a) => a.indexOf(v) === i).filter(i => ['base', 'models', 'datetime', 'angular-core/radio-button'].every(m => !i.endsWith(`/${m}`))).map(i => ({ path: i, moduleName: `${core.strings.classify(i.split('/')[2])}Module` }))) !== null && _b !== void 0 ? _b : []);
        }
        function findHtmlTagUsages(entry, packageName) {
            var _a, _b;
            const content = entry.content.toString();
            const packageRoot = tree.getDir(`src/${packageName}`);
            return ((_b = (_a = content
                .match(/<sbb-[^ >]+/g)) === null || _a === void 0 ? void 0 : _a.map(t => t.substring(5).trim()).filter(t => t !== 'option' && (packageRoot.subdirs.includes(core.fragment(t)) || t.startsWith('icon'))).filter((v, i, a) => a.indexOf(v) === i).map(i => i.startsWith('icon') ? resolveIconImport(i) : resolveImport(packageName, i))) !== null && _b !== void 0 ? _b : []);
        }
        function resolveIconImport(tagName) {
            return iconLookup[tagName];
        }
        function resolveImport(packageName, moduleName) {
            return {
                path: `@sbb-esta/angular-${packageName}/${moduleName}`,
                moduleName: `${core.strings.classify(moduleName)}Module`
            };
        }
        function detectUsedAngularModules(dir) {
            const modules = {
                forms: false,
                router: false
            };
            dir.visit((path, entry) => {
                if (path.endsWith('html') && entry) {
                    const content = entry.content.toString();
                    if (content.match(/(ngModel|formGroup|formControl)/)) {
                        modules.forms = true;
                    }
                    if (content.includes('routerLink')) {
                        modules.router = true;
                    }
                }
            });
            return modules;
        }
    };
}

exports.normalizeExamples = normalizeExamples;