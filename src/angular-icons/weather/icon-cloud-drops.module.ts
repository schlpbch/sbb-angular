import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-cloud-drops',
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
          d="M7.2 10.2c-2.14 0-2.567 4.3.8 4.3h7c3.203 0 3.2-4.3.7-4.2 1.1-3.7-3.8-5.4-5.3-2-1.32-1.082-3.432-.042-3.2 1.9zm.3 5.8S7 17 7 17.5a.5.5 0 001 0c0-.5-.5-1.5-.5-1.5zm4 0s-.5 1-.5 1.5a.5.5 0 001 0c0-.5-.5-1.5-.5-1.5zm4 0s-.5 1-.5 1.5a.5.5 0 001 0c0-.5-.5-1.5-.5-1.5zm-2 2s-.5 1-.5 1.5a.5.5 0 001 0c0-.5-.5-1.5-.5-1.5zm-4 0S9 19 9 19.5a.5.5 0 001 0c0-.5-.5-1.5-.5-1.5z"
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
          d="M10.8 15.3c-3.211 0-3.85 6.45 1.2 6.45h10.5c4.805 0 4.8-6.45 1.05-6.3 1.65-5.55-5.7-8.1-7.95-3-1.981-1.623-5.148-.063-4.8 2.85zm.45 8.7s-.75 1.5-.75 2.25a.75.75 0 001.5 0c0-.75-.75-2.25-.75-2.25zm6 0s-.75 1.5-.75 2.25a.75.75 0 001.5 0c0-.75-.75-2.25-.75-2.25zm6 0s-.75 1.5-.75 2.25a.75.75 0 001.5 0c0-.75-.75-2.25-.75-2.25zm-3 3s-.75 1.5-.75 2.25a.75.75 0 001.5 0c0-.75-.75-2.25-.75-2.25zm-6 0s-.75 1.5-.75 2.25a.75.75 0 001.5 0c0-.75-.75-2.25-.75-2.25z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloudDropsComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconCloudDropsComponent],
  exports: [IconCloudDropsComponent],
})
export class IconCloudDropsModule {}
