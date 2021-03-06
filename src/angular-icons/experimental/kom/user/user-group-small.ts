/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconUserGroupSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M13.65 11.746c2.52 1.447 3.64 3.804 3.85 6.755h-11c.05-3.026 1.382-5.358 3.8-6.75m-.77-1.873c.15 1.485 1.156 2.623 2.47 2.623 1.313 0 2.32-1.138 2.47-2.623m-.94-2.756c-.418-.386-.94-.623-1.53-.623-.59 0-1.113.237-1.53.623M16 4.5c-1.313 0-2.319 1.139-2.47 2.623.594.547.97 1.401.97 2.379 0 .129-.018.252-.03.377.418.386.941.623 1.53.623 1.425 0 2.5-1.333 2.5-3 0-1.668-1.075-3.002-2.5-3.002zm-1.53 5.38c.013-.126.03-.249.03-.378 0-.978-.376-1.832-.97-2.379m-3.06 0C10.32 5.638 9.314 4.5 8 4.5c-1.424 0-2.5 1.334-2.5 3.002 0 1.667 1.076 3 2.5 3 .59 0 1.113-.237 1.53-.623-.012-.125-.03-.248-.03-.377 0-.978.377-1.832.97-2.379zm0 0c-.593.547-.97 1.401-.97 2.38 0 .128.018.251.03.376m8.12-.134c2.52 1.447 3.64 3.805 3.85 6.756h-4.312m-10.446-.003H2.5c.05-3.026 1.382-5.358 3.8-6.75"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-user',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconUserGroupSmall {}

@Component({
  selector: 'sbb-icon-user-group-small',
  template: ` <svg sbbIconUserGroupSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUserGroupSmall {}

@NgModule({
  declarations: [SvgIconUserGroupSmall, IconUserGroupSmall],
  exports: [SvgIconUserGroupSmall, IconUserGroupSmall],
})
export class IconUserGroupSmallModule {}
