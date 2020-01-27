/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCameraSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M2.5 19.5h19v-12h-19v12zm13-6a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-.004-6l-.996-3h-5l-1 3m-6 0v-1h2v1"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconCameraSmall {}

@Component({
  selector: 'sbb-icon-camera-small',
  template: `
    <svg sbbIconCameraSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCameraSmall {}

@NgModule({
  declarations: [SvgIconCameraSmall, IconCameraSmall],
  exports: [SvgIconCameraSmall, IconCameraSmall]
})
export class IconCameraSmallModule {}