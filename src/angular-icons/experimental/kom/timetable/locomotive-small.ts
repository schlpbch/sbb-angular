/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconLocomotiveSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M11.5 15.5H18l-3-6h-3.5v6zm-9.5 5h4.5v-15H2m0-2.001h10m-5.5 14.5h3M9.5 5.5v15l6 .001c4.582.002 6.936-.857 5.375-4.784L17.312 8.53C16.235 6.574 14.765 5.468 11.5 5.5h-2z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-timetable',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconLocomotiveSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-locomotive-small',
  template: ` <svg sbbIconLocomotiveSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLocomotiveSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconLocomotiveSmall, IconLocomotiveSmall],
  exports: [SvgIconLocomotiveSmall, IconLocomotiveSmall],
})
export class IconLocomotiveSmallModule {}
