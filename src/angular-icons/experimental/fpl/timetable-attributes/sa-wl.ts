/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaWl]',
  template: `
    <svg:path
      fill="#000"
      fill-rule="evenodd"
      d="M23.556 15H21.44v-4.9H3.115V15H1V1h.966c.483 0 1.09.267 1.822.808a8.991 8.991 0 011.898 1.881c.53.719.929 1.423 1.194 2.114.266.692.4 1.424.4 2.197h2.1c0-1.53.511-2.915 1.533-3.92 1.022-1.007 2.275-1.74 3.756-1.68h8.887V15"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 25px;
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
    viewBox: '0 0 25 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaWl {}

@Component({
  selector: 'sbb-icon-sa-wl',
  template: ` <svg sbbIconSaWl></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaWl {}

@NgModule({
  declarations: [SvgIconSaWl, IconSaWl],
  exports: [SvgIconSaWl, IconSaWl],
})
export class IconSaWlModule {}
