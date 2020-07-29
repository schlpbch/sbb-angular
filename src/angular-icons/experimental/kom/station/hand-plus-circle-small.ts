/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconHandPlusCircleSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M9.5 2.5a5 5 0 11-.001 10 5 5 0 01.001-10zm0 8.5V4M6 7.5h7m-4.139 9.528L4.126 13.72a1 1 0 00-1.252 1.56L8.8 20.5h3.943l1.008 1h7.45l-5.028-5.064c-1.137-1.094-2.584-1.908-4.063-1.936H10c-1.985 0-2.032 3 0 3h2"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 24px;
        height: 24px;
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
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconHandPlusCircleSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-hand-plus-circle-small',
  template: ` <svg sbbIconHandPlusCircleSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHandPlusCircleSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconHandPlusCircleSmall, IconHandPlusCircleSmall],
  exports: [SvgIconHandPlusCircleSmall, IconHandPlusCircleSmall],
})
export class IconHandPlusCircleSmallModule {}
