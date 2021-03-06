/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaFw]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M4.56 1.037h7.702l-.48 2.2h-4.88l-.74 3.441h4.66l-.44 2.201h-4.68L4.42 15h-2.8zM13.14 1.037h2.802l.42 10.702h.04l4.64-10.702h3.76l.062 10.702h.04l4.94-10.702h2.9L26.084 15h-3.501l-.14-11.162h-.04L17.483 15H14.02z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 34px;
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
    viewBox: '0 0 34 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaFw {}

@Component({
  selector: 'sbb-icon-sa-fw',
  template: ` <svg sbbIconSaFw></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaFw {}

@NgModule({
  declarations: [SvgIconSaFw, IconSaFw],
  exports: [SvgIconSaFw, IconSaFw],
})
export class IconSaFwModule {}
