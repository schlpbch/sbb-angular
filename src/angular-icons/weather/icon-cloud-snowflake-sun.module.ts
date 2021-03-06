import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-cloud-snowflake-sun',
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
          d="M16.02 14.384c2.145-.702 1.878-4.172-.32-4.084 1.1-3.7-3.8-5.4-5.3-2-1.32-1.082-3.433-.042-3.2 1.9-1.9 0-2.449 3.385-.197 4.149m10.336-2.962c1.266-.352 2.16-1.489 2.16-2.887 0-1.69-1.308-3-3-3-.992 0-1.854.451-2.395 1.167M11.5 11v7m-3.486-3.5h7m-5.99-2.475l4.95 4.95m-4.935 0l4.95-4.95"
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
          d="M24.03 21.576c3.217-1.053 2.818-6.258-.48-6.126 1.65-5.55-5.7-8.1-7.95-3-1.98-1.623-5.149-.063-4.8 2.85-2.85 0-3.673 5.077-.296 6.223m15.504-4.442c1.9-.528 3.242-2.234 3.242-4.33 0-2.537-1.964-4.5-4.5-4.5-1.49 0-2.783.676-3.594 1.75M17.25 16.5V27m-5.229-5.25h10.5m-8.984-3.713l7.425 7.425m-7.403 0l7.425-7.425"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloudSnowflakeSunComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconCloudSnowflakeSunComponent],
  exports: [IconCloudSnowflakeSunComponent],
})
export class IconCloudSnowflakeSunModule {}
