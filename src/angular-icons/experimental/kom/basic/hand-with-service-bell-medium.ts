/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconHandWithServiceBellMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M3 17.25h28.5m-18.208 8.292L6.19 20.58a1.501 1.501 0 10-1.878 2.34l8.887 7.83h5.915l1.512 1.5H31.8l-7.542-7.596c-1.706-1.641-3.876-2.862-6.095-2.904h-3.163c-2.978 0-3.048 4.5 0 4.5h3m11.249-9c0-6.154-5.763-9-12-9s-12 2.846-12 9m13.5-10.5a1.5 1.5 0 11-3 .001 1.5 1.5 0 013 0z"
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
export class SvgIconHandWithServiceBellMedium {}

@Component({
  selector: 'sbb-icon-hand-with-service-bell-medium',
  template: ` <svg sbbIconHandWithServiceBellMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHandWithServiceBellMedium {}

@NgModule({
  declarations: [SvgIconHandWithServiceBellMedium, IconHandWithServiceBellMedium],
  exports: [SvgIconHandWithServiceBellMedium, IconHandWithServiceBellMedium],
})
export class IconHandWithServiceBellMediumModule {}
