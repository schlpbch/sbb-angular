/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconDocumentStandardMedium]',
  template: `
    <svg:path fill="none" stroke="#000" d="M9.75 6.75h9l7.5 7.5v15H9.75V6.75zm16.5 7.5h-7.5v-7.5" />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 36px;
        height: 36px;
      }
      :host-context(.sbb-icon-inherit-color) [fill]:not([fill='none']) {
        fill: currentColor;
      }
      :host-context(.sbb-icon-inherit-color) [stroke]:not([stroke='none']) {
        stroke: currentColor;
      }
    `,
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-document',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconDocumentStandardMedium {}

@Component({
  selector: 'sbb-icon-document-standard-medium',
  template: ` <svg sbbIconDocumentStandardMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDocumentStandardMedium {}

@NgModule({
  declarations: [SvgIconDocumentStandardMedium, IconDocumentStandardMedium],
  exports: [SvgIconDocumentStandardMedium, IconDocumentStandardMedium],
})
export class IconDocumentStandardMediumModule {}
