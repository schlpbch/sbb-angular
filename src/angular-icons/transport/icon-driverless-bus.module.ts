import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-driverless-bus',
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
          d="M6.5 16.5v2h3v-2m-3-7h-1v1h1m11-1h1v1h-1m0 1h-11m3 2.5A.5.5 0 108.498 14 .5.5 0 009.5 14zm6 0a.5.5 0 10-1.002.001A.5.5 0 0015.5 14zm4 1v-2m2 3v-4m-17 1v2m-2-3v4m15 .5h-11V7A2.5 2.5 0 019 4.5h6A2.5 2.5 0 0117.5 7v9.5zm-2.999 0v2H17.5v-2M15 6.5H9"
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
          d="M9.75 24.75v3h4.5v-3m-4.5-10.5h-1.5v1.5h1.5m16.5-1.5h1.5v1.5h-1.5m0 1.501l-16.5-.001m4.5 3.75a.751.751 0 00-1.5 0 .75.75 0 001.5 0zm9 0a.751.751 0 00-1.5 0 .75.75 0 001.5 0zm6 1.5v-3m3 4.5v-6m-25.5 1.5v3m-3-4.5v6m22.5.75H9.75V10.5a3.75 3.75 0 013.75-3.75h9a3.75 3.75 0 013.75 3.75v14.25zm-4.498 0v3h4.498v-3M22.5 9.75l-9-.001"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDriverlessBusComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconDriverlessBusComponent],
  exports: [IconDriverlessBusComponent],
})
export class IconDriverlessBusModule {}
