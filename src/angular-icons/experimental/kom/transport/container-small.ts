/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconContainerSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M3.5 20.5h18v-9h-18v9zm3-9v9m3-9v9m3-9v9m3-9v9m3-9v9M5 11.5l7.5-4 7.5 4M13.506 3L13.5 5.063A2.001 2.001 0 0113 9a2 2 0 01-2-2"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 24px;
        height: 24px;
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
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-transport',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconContainerSmall {}

@Component({
  selector: 'sbb-icon-container-small',
  template: ` <svg sbbIconContainerSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconContainerSmall {}

@NgModule({
  declarations: [SvgIconContainerSmall, IconContainerSmall],
  exports: [SvgIconContainerSmall, IconContainerSmall],
})
export class IconContainerSmallModule {}
