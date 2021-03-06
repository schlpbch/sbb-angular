/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconIncreaseSizeSmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path d="M20.5 3.5L16 8m1-4.5h3.5V7" />
      <svg:path stroke-dasharray="1 1" d="M2 9.5h12.5V22" />
    </svg:g>
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-arrow',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconIncreaseSizeSmall {}

@Component({
  selector: 'sbb-icon-increase-size-small',
  template: ` <svg sbbIconIncreaseSizeSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconIncreaseSizeSmall {}

@NgModule({
  declarations: [SvgIconIncreaseSizeSmall, IconIncreaseSizeSmall],
  exports: [SvgIconIncreaseSizeSmall, IconIncreaseSizeSmall],
})
export class IconIncreaseSizeSmallModule {}
