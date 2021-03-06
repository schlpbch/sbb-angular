/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconThreeAdultsLarge]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M35.5 10.5a2 2 0 11-.001 4.001A2 2 0 0135.5 10.5zm-2 27v2.499V37.5zm4 0v2.499V37.5zm-7-8l2-12h6l2 12m-1 8l-1-9.999h-6l-1 9.999h8zm-16-27a2 2 0 11-.001 4.001A2 2 0 0123.5 10.5zm-2 17.001v12.498-12.498zm4.001 0v12.498-12.498zM19.5 29.5v-12h8v12m-8-1.999h8-8zm-7-17.001a2 2 0 11-.001 4.001A2 2 0 0112.5 10.5zm-2 17.001v12.498-12.498zm4 0v12.498-12.498zm-6 1.999v-12h8v12m-8-1.999h8"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 48px;
        height: 48px;
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
    viewBox: '0 0 48 48',
    class: 'sbb-icon sbb-icon-kom sbb-icon-leisure',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconThreeAdultsLarge {}

@Component({
  selector: 'sbb-icon-three-adults-large',
  template: ` <svg sbbIconThreeAdultsLarge></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconThreeAdultsLarge {}

@NgModule({
  declarations: [SvgIconThreeAdultsLarge, IconThreeAdultsLarge],
  exports: [SvgIconThreeAdultsLarge, IconThreeAdultsLarge],
})
export class IconThreeAdultsLargeModule {}
