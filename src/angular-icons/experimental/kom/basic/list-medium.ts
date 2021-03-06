/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconListMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M13.503 8.25h15-15zm-7.502 0h3-3zm7.502 6h15-15zm-7.502 0h3-3zm7.502 12h15-15zm-7.502 0h3-3zm7.502-6h15-15zm-7.502 0h3-3z"
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
export class SvgIconListMedium {}

@Component({
  selector: 'sbb-icon-list-medium',
  template: ` <svg sbbIconListMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconListMedium {}

@NgModule({
  declarations: [SvgIconListMedium, IconListMedium],
  exports: [SvgIconListMedium, IconListMedium],
})
export class IconListMediumModule {}
