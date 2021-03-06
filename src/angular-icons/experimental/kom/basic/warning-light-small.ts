/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconWarningLightSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M12.5 5V2v3zM9 6L7 4l2 2zm7 0l2-2-2 2zM8.5 17.5v-6a4 4 0 018 0v6h-8zm2-1.5v-5 5zm9 4.5h-14l1-3h12l1 3z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconWarningLightSmall {}

@Component({
  selector: 'sbb-icon-warning-light-small',
  template: ` <svg sbbIconWarningLightSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWarningLightSmall {}

@NgModule({
  declarations: [SvgIconWarningLightSmall, IconWarningLightSmall],
  exports: [SvgIconWarningLightSmall, IconWarningLightSmall],
})
export class IconWarningLightSmallModule {}
