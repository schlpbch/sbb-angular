/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconChargingStationSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M5.5 9.5h6v-4h-6v4zm8-2h2v9a2 2 0 004 0v-3m2-2a2 2 0 01-4 0v-1h4v1zm-3-1V8m2 2.5V8m-17 12.5h10v-17h-10v17z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-transport',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconChargingStationSmall {}

@Component({
  selector: 'sbb-icon-charging-station-small',
  template: ` <svg sbbIconChargingStationSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconChargingStationSmall {}

@NgModule({
  declarations: [SvgIconChargingStationSmall, IconChargingStationSmall],
  exports: [SvgIconChargingStationSmall, IconChargingStationSmall],
})
export class IconChargingStationSmallModule {}
