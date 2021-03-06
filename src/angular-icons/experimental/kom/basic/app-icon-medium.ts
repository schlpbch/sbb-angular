/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconAppIconMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path
        fill="#000"
        d="M20.212 13.5l4.116 4.056H19.21V13.5h-2.42v4.056h-5.089l4.116-4.056h-3.06l-5.258 5.25L12.757 24h3.06l-4.116-4.029h5.089V24h2.42v-4.029h5.118L20.212 24h3.058l5.229-5.25-5.229-5.25z"
      />
      <svg:path
        stroke="#000"
        d="M3.75 9.54a5.789 5.789 0 015.789-5.79h16.923a5.789 5.789 0 015.788 5.79v16.92a5.79 5.79 0 01-5.788 5.79H9.538a5.79 5.79 0 01-5.788-5.79V9.54z"
      />
    </svg:g>
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconAppIconMedium {}

@Component({
  selector: 'sbb-icon-app-icon-medium',
  template: ` <svg sbbIconAppIconMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconAppIconMedium {}

@NgModule({
  declarations: [SvgIconAppIconMedium, IconAppIconMedium],
  exports: [SvgIconAppIconMedium, IconAppIconMedium],
})
export class IconAppIconMediumModule {}
