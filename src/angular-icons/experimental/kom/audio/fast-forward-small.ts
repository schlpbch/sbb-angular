/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconFastForwardSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M15 8.75L10.5 5.5v4.333L9 8.75 4.5 5.5v13L9 15.25l1.5-1.084V18.5l4.5-3.25L19.5 12z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-audio',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconFastForwardSmall {}

@Component({
  selector: 'sbb-icon-fast-forward-small',
  template: ` <svg sbbIconFastForwardSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFastForwardSmall {}

@NgModule({
  declarations: [SvgIconFastForwardSmall, IconFastForwardSmall],
  exports: [SvgIconFastForwardSmall, IconFastForwardSmall],
})
export class IconFastForwardSmallModule {}
