/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSoccerBallLarge]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M24.5 11.157V17m-12.219 3.031l5.22 2.055M16.944 34.4l3.229-4.085m11.886 4.09l-3.234-4.09m7.883-10.283L31.5 22.086M24.5 17l-7 5.086 2.674 8.229h8.652l2.674-8.229-7-5.086zM9.825 34.4h7.12l2.207 6.792m-9.07-27.933l2.2 6.772-5.77 4.193M30.272 6.963L24.5 11.157l-5.773-4.194M42.488 24.23l-5.779-4.199 2.204-6.781m-9.057 27.94l2.204-6.786h7.111M18.727 6.963l5.773 4.194 5.773-4.194M6.5 24c0 .075.01.148.011.224l5.77-4.193-2.2-6.772m28.832-.01l-2.204 6.783 5.78 4.198c0-.078.011-.152.011-.23M19.152 41.192L16.945 34.4h-7.12m29.347.005H32.06l-2.204 6.786M24.5 6c9.941 0 18 8.059 18 18s-8.059 18-18 18-18-8.059-18-18 8.059-18 18-18z"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 48px;
        height: 48px;
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
    viewBox: '0 0 48 48',
    class: 'sbb-icon sbb-icon-kom sbb-icon-leisure',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSoccerBallLarge {}

@Component({
  selector: 'sbb-icon-soccer-ball-large',
  template: ` <svg sbbIconSoccerBallLarge></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSoccerBallLarge {}

@NgModule({
  declarations: [SvgIconSoccerBallLarge, IconSoccerBallLarge],
  exports: [SvgIconSoccerBallLarge, IconSoccerBallLarge],
})
export class IconSoccerBallLargeModule {}
