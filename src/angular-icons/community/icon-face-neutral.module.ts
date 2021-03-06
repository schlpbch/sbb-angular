import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-face-neutral',
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
          d="M20.5 12c0 4.746-3.754 8.5-8.5 8.5S3.5 16.746 3.5 12c0-4.747 3.754-8.5 8.5-8.5s8.5 3.753 8.5 8.5zM17 14.5H7m2-6a.5.5 0 100 1 .5.5 0 000-1m6 0a.5.5 0 100 1 .5.5 0 000-1"
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
          d="M30.75 18c0 7.12-5.631 12.75-12.75 12.75S5.25 25.12 5.25 18 10.881 5.25 18 5.25 30.75 10.88 30.75 18zm-5.25 3.75h-15m3-9a.75.75 0 100 1.5.75.75 0 000-1.5m9 0a.75.75 0 100 1.5.75.75 0 000-1.5"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFaceNeutralComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconFaceNeutralComponent],
  exports: [IconFaceNeutralComponent],
})
export class IconFaceNeutralModule {}
