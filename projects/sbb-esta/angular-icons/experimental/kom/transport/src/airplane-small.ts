/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconAirplaneSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M20 13.5l-6 .002-2.5 7.998H9l1-7.998H6l-1 2H3L4.5 12 3 8.5h2l1 2h4l-1.001-8H11.5l2.5 8h6a1.5 1.5 0 010 3z"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-transport',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconAirplaneSmall {}

@Component({
  selector: 'sbb-icon-airplane-small',
  template: `
    <svg sbbIconAirplaneSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconAirplaneSmall {}

@NgModule({
  declarations: [SvgIconAirplaneSmall, IconAirplaneSmall],
  exports: [SvgIconAirplaneSmall, IconAirplaneSmall]
})
export class IconAirplaneSmallModule {}