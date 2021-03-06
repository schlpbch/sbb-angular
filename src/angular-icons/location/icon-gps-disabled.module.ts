import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-gps-disabled',
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
          d="M5.504 12.5H3m16.504-.004h2.495M12.504 19.5V22m0-16.5V3M9.67 9.672a4 4 0 005.657 5.657m0 0a4 4 0 01-5.657-5.657M7.546 7.546A6.977 6.977 0 005.5 12.5c0 3.877 3.123 7 7 7a6.982 6.982 0 004.954-2.046m-1.313-3.314a3.963 3.963 0 00.359-1.64 4 4 0 00-4-4 3.98 3.98 0 00-1.64.36m7.49 7.49a6.978 6.978 0 001.15-3.85c0-3.877-3.123-7-7-7a6.978 6.978 0 00-3.85 1.15m2.21 2.21a3.968 3.968 0 011.64-.36 4 4 0 014 4c0 .587-.133 1.139-.36 1.64M5.075 5.076l14.85 14.85"
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
          d="M8.256 18.75H4.5m24.756-.006h3.742M18.756 29.25V33m0-24.75V4.5m-4.249 10.007a6 6 0 008.486 8.485m0 .001a6 6 0 01-8.485-8.486m-3.188-3.188a10.466 10.466 0 00-3.07 7.431c0 5.816 4.685 10.5 10.5 10.5 2.908 0 5.533-1.171 7.432-3.069m-1.971-4.97c.34-.753.538-1.581.538-2.46a6 6 0 00-6-6c-.879 0-1.707.2-2.46.538m11.235 11.235a10.468 10.468 0 001.725-5.774c0-5.815-4.684-10.5-10.5-10.5-2.136 0-4.117.636-5.773 1.725m3.313 3.314a5.952 5.952 0 012.462-.538 6 6 0 016 6c0 .879-.2 1.707-.54 2.46M7.613 7.613l22.275 22.274"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGpsDisabledComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconGpsDisabledComponent],
  exports: [IconGpsDisabledComponent],
})
export class IconGpsDisabledModule {}
