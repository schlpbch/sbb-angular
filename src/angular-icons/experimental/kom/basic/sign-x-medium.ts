/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconSignXMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M4.2 30.75h26.09L17.25 4.5 4.2 30.75zm9.3-11.25L21 27m0-7.5L13.5 27"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSignXMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sign-x-medium',
  template: ` <svg sbbIconSignXMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSignXMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSignXMedium, IconSignXMedium],
  exports: [SvgIconSignXMedium, IconSignXMedium],
})
export class IconSignXMediumModule {}
