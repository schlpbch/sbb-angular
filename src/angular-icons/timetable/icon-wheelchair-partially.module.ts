import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-wheelchair-partially',
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
          d="M8.7 10.93a4.012 4.012 0 00-2.198 3.567c0 2.2 1.802 4 4 4a4.015 4.015 0 003.62-2.303M4.7 4.5C3.4 6.3 2.4 8.7 2.4 12s1 5.6 2.3 7.5m14.4 0c1.3-1.8 2.3-4.2 2.3-7.5s-1-5.6-2.3-7.5M10.5 8v5.5h5V19M11 6a.5.5 0 11-1 0 .5.5 0 011 0z"
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
          d="M13.05 16.396c-1.951.993-3.297 3.024-3.297 5.35 0 3.3 2.703 6 6 6 2.39 0 4.467-1.417 5.43-3.454M7.05 6.75C5.1 9.45 3.6 13.05 3.6 18S5.1 26.4 7.05 29.25m21.6 0c1.95-2.7 3.45-6.3 3.45-11.25s-1.5-8.4-3.45-11.25M15.75 12v8.25h7.5v8.25M16.5 9A.75.75 0 1115 9a.75.75 0 011.5 0z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWheelchairPartiallyComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconWheelchairPartiallyComponent],
  exports: [IconWheelchairPartiallyComponent],
})
export class IconWheelchairPartiallyModule {}
