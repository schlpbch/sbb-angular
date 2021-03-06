/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconWheelchairUncertainSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M6.5 8v5.5h5V19m-6.802-8.067A4.013 4.013 0 002.5 14.5c0 2.198 1.8 4 4 4a4.013 4.013 0 003.619-2.304m7.426.8v2M17.5 15c0-1.497.057-2.13 1-3.2l1.5-1.5c1.736-1.94.807-3.727-.475-4.411-2.063-1.006-5.025-.197-5.025 3.11M7 6a.5.5 0 11-1 0 .5.5 0 011 0z"
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
export class SvgIconWheelchairUncertainSmall {}

@Component({
  selector: 'sbb-icon-wheelchair-uncertain-small',
  template: ` <svg sbbIconWheelchairUncertainSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWheelchairUncertainSmall {}

@NgModule({
  declarations: [SvgIconWheelchairUncertainSmall, IconWheelchairUncertainSmall],
  exports: [SvgIconWheelchairUncertainSmall, IconWheelchairUncertainSmall],
})
export class IconWheelchairUncertainSmallModule {}
