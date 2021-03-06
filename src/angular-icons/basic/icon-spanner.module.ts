import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-spanner',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#000"
          d="M21.14 4.86L18.5 7.5h-2v-2l2.64-2.64a3.984 3.984 0 00-1.64-.36 4 4 0 00-4 4c0 .586.133 1.138.36 1.64l-5.72 5.72a3.968 3.968 0 00-1.64-.36 4 4 0 00-4 4c0 .586.133 1.138.36 1.64L5.5 16.5h2v2l-2.64 2.64c.502.227 1.054.36 1.64.36a4 4 0 004-4c0-.586-.132-1.139-.36-1.64l5.72-5.72a3.98 3.98 0 001.64.36 4 4 0 004-4c0-.586-.132-1.139-.36-1.64z"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M31.71 7.29l-3.96 3.96h-3v-3l3.96-3.96a5.976 5.976 0 00-2.46-.54 6 6 0 00-6 6c0 .88.199 1.708.54 2.46l-8.58 8.58a5.952 5.952 0 00-2.46-.54 6 6 0 00-6 6c0 .88.199 1.708.54 2.46l3.96-3.96h3v3l-3.96 3.96c.752.341 1.58.54 2.46.54a6 6 0 006-6c0-.878-.199-1.708-.54-2.46l8.58-8.58a5.97 5.97 0 002.46.54 6 6 0 006-6c0-.878-.199-1.708-.54-2.46z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSpannerComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSpannerComponent],
  exports: [IconSpannerComponent],
})
export class IconSpannerModule {}
