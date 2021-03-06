/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaTc]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M3.16 1.037h10.782l-.46 2.2h-3.94L7.002 15h-2.92l2.54-11.763h-3.94zM24.903 3.817c-.64-.439-1.7-.82-3.2-.82-3.102 0-5.282 2.341-5.282 5.621 0 2.341 1.52 4.422 3.981 4.422 1.18 0 2.14-.38 2.94-.86l-.44 2.68c-1.02.28-2.1.38-3.16.38-4.222 0-6.242-2.84-6.242-6.622 0-4.5 3.061-7.822 8.002-7.822 1.4 0 2.88.18 4.1.681l-.699 2.34z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 27px;
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
    viewBox: '0 0 27 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaTc {}

@Component({
  selector: 'sbb-icon-sa-tc',
  template: ` <svg sbbIconSaTc></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaTc {}

@NgModule({
  declarations: [SvgIconSaTc, IconSaTc],
  exports: [SvgIconSaTc, IconSaTc],
})
export class IconSaTcModule {}
