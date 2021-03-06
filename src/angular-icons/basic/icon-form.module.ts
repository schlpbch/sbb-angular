import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-form',
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
          d="M15.5 4.5h4v16h-15v-16h4M7 8.5h10m-10 3h10m-10 3h10m-10 3h5m1.5-14s-.042-1-1.5-1-1.5 1-1.5 1h-2v2h7v-2h-2z"
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
          d="M23.25 6.75h6v24H6.75v-24h6m-2.25 6h15m-15 4.5h15m-15 4.5h15m-15 4.5H18m2.25-21s-.063-1.5-2.25-1.5-2.25 1.5-2.25 1.5h-3v3h10.5v-3h-3z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFormComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconFormComponent],
  exports: [IconFormComponent],
})
export class IconFormModule {}
