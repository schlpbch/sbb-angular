/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconBrochureMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M19.5 13.5l9-3m-9 7.5l9-3m-9 7.5l9-3m-9 7.5l9-3M6 10.5l9 3M6 15l9 3m-9 1.5l9 3M6 24l9 3m2.25-17.25l13.5-4.5v22.5l-13.5 4.5-13.5-4.5V5.25l13.5 4.5zm0 22.5V9.75"
    />
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconBrochureMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-brochure-medium',
  template: ` <svg sbbIconBrochureMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBrochureMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconBrochureMedium, IconBrochureMedium],
  exports: [SvgIconBrochureMedium, IconBrochureMedium],
})
export class IconBrochureMediumModule {}
