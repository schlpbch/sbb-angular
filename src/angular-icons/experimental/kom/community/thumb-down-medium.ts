/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconThumbDownMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M24 17.262h2.25m-18.002 3h4.502V8.25H8.248v12.012zm15.752-6h2.25m-2.25-3h.75m1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 100-3 1.5 1.5 0 100-3h-1.5a1.5 1.5 0 000-3h-7.5c-2.262 0-4.5.75-4.5 4.5v7.5h1.5l6.435 7.057a1.5 1.5 0 002.472-1.578L21 20.263h5.25"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-community',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconThumbDownMedium {}

@Component({
  selector: 'sbb-icon-thumb-down-medium',
  template: ` <svg sbbIconThumbDownMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconThumbDownMedium {}

@NgModule({
  declarations: [SvgIconThumbDownMedium, IconThumbDownMedium],
  exports: [SvgIconThumbDownMedium, IconThumbDownMedium],
})
export class IconThumbDownMediumModule {}
