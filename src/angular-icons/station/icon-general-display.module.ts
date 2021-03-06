import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-general-display',
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
          d="M17.5 7.5V10m2.001-4.5V4M4.499 5.5V4M19.5 9.5c0 1.116-.884 2-2 2-1.115 0-2-.884-2-2s.885-2 2-2c1.116 0 2 .884 2 2zm-17 10h19v-14h-19v14zM4 7.5h10m-10 2h10m-10 2h10m-10 2h10m-10 2h10m-10 2h10"
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
          d="M26.25 11.25V15m3.002-6.75V6M6.748 8.25V6m22.501 8.25c0 1.674-1.326 3-3 3a2.98 2.98 0 01-3-3c0-1.674 1.328-3 3-3 1.674 0 3 1.326 3 3zm-25.5 15h28.5v-21H3.75v21zm2.25-18h15m-15 3h15m-15 3h15M6 20.251h15m-15 3h15m-15 3h15"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGeneralDisplayComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconGeneralDisplayComponent],
  exports: [IconGeneralDisplayComponent],
})
export class IconGeneralDisplayModule {}
