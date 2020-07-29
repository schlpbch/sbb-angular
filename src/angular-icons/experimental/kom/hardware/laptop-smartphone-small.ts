/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconLaptopSmartphoneSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M19.5 11V4.5h-13v9l-4 3v2H14m-.008-5H6.5m7.5 3H2.5m14-4h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7a1 1 0 011-1zm.5 1h3"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconLaptopSmartphoneSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-laptop-smartphone-small',
  template: ` <svg sbbIconLaptopSmartphoneSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLaptopSmartphoneSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconLaptopSmartphoneSmall, IconLaptopSmartphoneSmall],
  exports: [SvgIconLaptopSmartphoneSmall, IconLaptopSmartphoneSmall],
})
export class IconLaptopSmartphoneSmallModule {}
