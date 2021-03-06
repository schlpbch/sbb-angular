/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaVx]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M3.14 1.037h2.802l1.3 10.862h.04l5.8-10.862h3.04L8.323 15H4.98zM25.782 1.038l-3.84 4.8h-.04l-2.02-4.8H16.86l3.06 6.38L13.46 15h3.48l4.362-5.602h.04L23.481 15h3.06l-3.24-7.302 5.78-6.661z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 30px;
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
    viewBox: '0 0 30 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaVx {}

@Component({
  selector: 'sbb-icon-sa-vx',
  template: ` <svg sbbIconSaVx></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaVx {}

@NgModule({
  declarations: [SvgIconSaVx, IconSaVx],
  exports: [SvgIconSaVx, IconSaVx],
})
export class IconSaVxModule {}
