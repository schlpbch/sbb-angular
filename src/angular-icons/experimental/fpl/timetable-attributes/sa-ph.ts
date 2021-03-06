/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaPh]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M5.82 7.499h1c1.542 0 3.122-.8 3.122-2.541 0-1.42-1.14-1.72-2.34-1.72H6.72l-.9 4.261zM4.22 15h-2.8L4.38 1.038h2.36c2.582 0 6.123.14 6.123 3.62 0 3.381-2.781 5.041-5.901 5.041H5.34L4.22 15zM15.661 1.038h2.801l-1.18 5.64h5.641l1.18-5.64h2.8L23.983 15h-2.8l1.28-6.12h-5.642L15.541 15h-2.8z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 28px;
        height: 16px;
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
    viewBox: '0 0 28 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaPh {}

@Component({
  selector: 'sbb-icon-sa-ph',
  template: ` <svg sbbIconSaPh></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaPh {}

@NgModule({
  declarations: [SvgIconSaPh, IconSaPh],
  exports: [SvgIconSaPh, IconSaPh],
})
export class IconSaPhModule {}
