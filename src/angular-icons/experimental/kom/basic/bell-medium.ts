/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconBellMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M30 27.75c-3.687 0-3.75-3.75-3.75-3.75v-9c0-4.97-3.28-8.25-8.25-8.25-4.97 0-8.25 3.28-8.25 8.25v9S9.687 27.75 6 27.75h24zM21 6h-6m-.75 21.75c0 2.071 1.678 3 3.75 3s3.75-.929 3.75-3"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 36px;
        height: 36px;
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
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconBellMedium {}

@Component({
  selector: 'sbb-icon-bell-medium',
  template: ` <svg sbbIconBellMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBellMedium {}

@NgModule({
  declarations: [SvgIconBellMedium, IconBellMedium],
  exports: [SvgIconBellMedium, IconBellMedium],
})
export class IconBellMediumModule {}
