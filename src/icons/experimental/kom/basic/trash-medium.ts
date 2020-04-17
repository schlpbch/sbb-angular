/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTrashMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M27.75 11.264V29.25h-18V11.264m4.5 4.486v9m4.5-9v9m4.5-9v9m.675-13.486C22.89 9.47 20.97 8.25 18.75 8.25c-2.221 0-4.138 1.221-5.175 3.014m-6.075 0H30"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconTrashMedium {}

@Component({
  selector: 'sbb-icon-trash-medium',
  template: `
    <svg sbbIconTrashMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconTrashMedium {}

@NgModule({
  declarations: [SvgIconTrashMedium, IconTrashMedium],
  exports: [SvgIconTrashMedium, IconTrashMedium]
})
export class IconTrashMediumModule {}