/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconWifiSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M13.5 18a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM2.22 8.712C4.679 6.123 8.147 4.5 12 4.5c3.854 0 7.32 1.623 9.78 4.212m0 0C19.32 6.123 15.853 4.5 12 4.5c-3.854 0-7.32 1.623-9.78 4.212m2.173 2.064A10.46 10.46 0 0112 7.5a10.46 10.46 0 017.607 3.276m0 0A10.46 10.46 0 0012 7.5a10.46 10.46 0 00-7.607 3.276m2.178 2.069a7.473 7.473 0 015.435-2.341c2.138 0 4.062.9 5.428 2.335m0 0a7.469 7.469 0 00-5.428-2.335 7.47 7.47 0 00-5.434 2.34m2.172 2.064A4.477 4.477 0 0112 13.5c1.284 0 2.436.545 3.256 1.408m0 0A4.477 4.477 0 0012 13.5a4.477 4.477 0 00-3.256 1.408"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconWifiSmall {}

@Component({
  selector: 'sbb-icon-wifi-small',
  template: ` <svg sbbIconWifiSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWifiSmall {}

@NgModule({
  declarations: [SvgIconWifiSmall, IconWifiSmall],
  exports: [SvgIconWifiSmall, IconWifiSmall],
})
export class IconWifiSmallModule {}
