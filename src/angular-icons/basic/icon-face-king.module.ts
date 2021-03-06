import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-face-king',
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
          d="M17.5 14a5.5 5.5 0 11-11.001-.001A5.5 5.5 0 0117.5 14zm-7-1a.5.5 0 11-1 0 .5.5 0 011 0zm4 0a.5.5 0 11-1 0 .5.5 0 011 0zm-5.367 3A3.493 3.493 0 0012 17.5a3.49 3.49 0 002.866-1.5m.634-8.63V5L14 6l-1-1-1 1-1-1-1 1-1.5-1v2.37A7.46 7.46 0 0112 6.5a7.46 7.46 0 013.5.87z"
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
          d="M26.25 21a8.251 8.251 0 11-16.502-.002A8.251 8.251 0 0126.25 21zm-10.5-1.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM13.7 24a5.24 5.24 0 004.3 2.25c1.781 0 3.351-.892 4.3-2.25m.95-12.946V7.5L21 9l-1.5-1.5L18 9l-1.5-1.5L15 9l-2.25-1.5v3.554A11.19 11.19 0 0118 9.75c1.898 0 3.683.474 5.25 1.304z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFaceKingComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconFaceKingComponent],
  exports: [IconFaceKingComponent],
})
export class IconFaceKingModule {}
