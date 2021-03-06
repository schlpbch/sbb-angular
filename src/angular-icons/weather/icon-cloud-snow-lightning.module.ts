import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-cloud-snow-lightning',
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
          d="M15 14.5c3.178 0 3.2-4.3.7-4.2 1.1-3.7-3.8-5.4-5.3-2-1.32-1.082-3.432-.042-3.2 1.9-2.141 0-2.567 4.3.8 4.3m5-1L10.5 16h2.169l-3.33 2.715L11 16.5H8.5l3-3H13zm4 3a.5.5 0 11-1 0 .5.5 0 011 0zm-2 2a.5.5 0 11-1 0 .5.5 0 011 0zm-9-1a.5.5 0 11-1 0 .5.5 0 011 0z"
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
          d="M22.5 21.75c4.767 0 4.8-6.45 1.05-6.3 1.65-5.55-5.7-8.1-7.95-3-1.98-1.623-5.148-.063-4.8 2.85-3.212 0-3.85 6.45 1.2 6.45m7.5-1.5L15.75 24h3.253l-4.995 4.073L16.5 24.75h-3.75l4.5-4.5h2.25zm6 4.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-3 3a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9 26.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloudSnowLightningComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconCloudSnowLightningComponent],
  exports: [IconCloudSnowLightningComponent],
})
export class IconCloudSnowLightningModule {}
