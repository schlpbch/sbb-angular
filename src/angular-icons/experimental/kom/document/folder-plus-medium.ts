/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconFolderPlusMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M29.25 22.5V30m-3.75-3.75H33m-10.5 0H6.75v-13.5h15l1.5-3h5.992l.008 9.75"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-document',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconFolderPlusMedium {}

@Component({
  selector: 'sbb-icon-folder-plus-medium',
  template: ` <svg sbbIconFolderPlusMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFolderPlusMedium {}

@NgModule({
  declarations: [SvgIconFolderPlusMedium, IconFolderPlusMedium],
  exports: [SvgIconFolderPlusMedium, IconFolderPlusMedium],
})
export class IconFolderPlusMediumModule {}
