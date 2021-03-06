/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconChevronSmallDownMedium]',
  template: ` <svg:path fill="none" stroke="#000" d="M12.138 15.525l5.856 5.925 5.856-5.922" /> `,
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-arrow',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconChevronSmallDownMedium {}

@Component({
  selector: 'sbb-icon-chevron-small-down-medium',
  template: ` <svg sbbIconChevronSmallDownMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconChevronSmallDownMedium {}

@NgModule({
  declarations: [SvgIconChevronSmallDownMedium, IconChevronSmallDownMedium],
  exports: [SvgIconChevronSmallDownMedium, IconChevronSmallDownMedium],
})
export class IconChevronSmallDownMediumModule {}
