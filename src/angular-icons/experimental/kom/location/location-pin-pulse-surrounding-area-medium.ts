/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconLocationPinPulseSurroundingAreaMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M26.25 12.022a8.25 8.25 0 00-16.5 0c.056 1.415.474 2.604 1.149 3.728l7.125 11.248 7.125-11.248c.665-1.164 1.089-2.378 1.101-3.728zm-13.047 11.49c-5.525.625-9.453 2.298-9.453 4.237 0 2.468 6.348 4.5 14.25 4.5 7.903 0 14.25-2.032 14.25-4.5 0-1.924-3.87-3.586-9.327-4.222M10.18 14.25h3.32l2.25-6 2.25 9 2.25-6 1.5 2.985h4.1"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-location',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconLocationPinPulseSurroundingAreaMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-location-pin-pulse-surrounding-area-medium',
  template: ` <svg sbbIconLocationPinPulseSurroundingAreaMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLocationPinPulseSurroundingAreaMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [
    SvgIconLocationPinPulseSurroundingAreaMedium,
    IconLocationPinPulseSurroundingAreaMedium,
  ],
  exports: [
    SvgIconLocationPinPulseSurroundingAreaMedium,
    IconLocationPinPulseSurroundingAreaMedium,
  ],
})
export class IconLocationPinPulseSurroundingAreaMediumModule {}
