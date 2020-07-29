/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconDocumentMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path stroke="#000" d="M9.763 6.75h8.987l7.5 7.5v15H9.75l.013-22.5zm8.987 0v7.5h7.5" />
      <svg:path
        fill="#000"
        d="M19.2 21l2.401 2.25H18.75V21h-1.5v2.25H14.4L16.8 21H15l-3 3 3 3h1.8l-2.4-2.25h2.85V27h1.5v-2.25h2.851L19.2 27H21l3-3-3-3z"
      />
    </svg:g>
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
export class SvgIconDocumentMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-document-medium',
  template: ` <svg sbbIconDocumentMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDocumentMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconDocumentMedium, IconDocumentMedium],
  exports: [SvgIconDocumentMedium, IconDocumentMedium],
})
export class IconDocumentMediumModule {}
