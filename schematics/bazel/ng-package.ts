import { basename, fragment, relative, strings } from '@angular-devkit/core';
import { DirEntry, SchematicContext, Tree } from '@angular-devkit/schematics';

import { NgModule } from './ng-module';

export class NgPackage extends NgModule {
  shortName: string;
  entryPoints: string[];
  hasReadme: boolean;
  hasSchematics: boolean;
  hasSrcFiles: boolean;
  hasStyleBundle: boolean;
  hasTypography: boolean;
  markdownFiles: string[];
  markdownModules: string[];

  protected _templateUrl = './files/ngPackage';

  constructor(dir: DirEntry, tree: Tree, context: SchematicContext) {
    super(dir, tree, context);
    this.shortName = this.name.replace('angular-', '');
    const ngModules = this.ngModules().slice(1);
    this.entryPoints = ngModules.map((m) => this._resolvePath(m));
    this.hasReadme = dir.subfiles.includes(fragment('README.md'));
    this.hasSchematics = dir.subdirs.includes(fragment('schematics'));
    this.hasSrcFiles = dir.subdirs.includes(fragment('src'));
    this.hasStyleBundle = dir.subfiles.includes(fragment('_style_bundle.scss'));
    this.hasTypography = dir.subfiles.includes(fragment('typography.scss'));
    this.markdownFiles = this._markdownFiles.map((f) => basename(f.path));
    this.markdownModules = ngModules.filter((m) => m.hasMarkdown).map((m) => this._resolvePath(m));
  }

  private _resolvePath(m: NgModule) {
    return relative(this.path, m.path);
  }

  protected _templateOptions() {
    return {
      ...strings,
      uc: (s: string) => s.toUpperCase(),
      ...this,
      dependencies: this.dependencies.filter((d) => !d.startsWith(`//src/${this.name}`)),
    };
  }
}
