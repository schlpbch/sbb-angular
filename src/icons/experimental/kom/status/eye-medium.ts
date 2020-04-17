/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconEyeMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M23.25 18a5.25 5.25 0 10-10.5 0 5.25 5.25 0 0010.5 0zm7.5 0C29.634 16.35 24.375 9.75 18 9.75S6.525 16.185 5.25 18c1.116 1.65 6.375 8.25 12.75 8.25S29.475 19.815 30.75 18z"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-status',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconEyeMedium {}

@Component({
  selector: 'sbb-icon-eye-medium',
  template: `
    <svg sbbIconEyeMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconEyeMedium {}

@NgModule({
  declarations: [SvgIconEyeMedium, IconEyeMedium],
  exports: [SvgIconEyeMedium, IconEyeMedium]
})
export class IconEyeMediumModule {}