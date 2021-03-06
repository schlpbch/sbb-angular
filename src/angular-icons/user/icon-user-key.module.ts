import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-user-key',
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
          d="M12.5 6c0 1.914-1.272 3.5-3 3.5s-3-1.586-3-3.5 1.272-3.5 3-3.5 3 1.586 3 3.5zM7.583 8.715C4.89 10.709 3.596 13.55 3.5 17.5H10m1.38-8.76c1.245.86 2.112 1.871 2.697 2.996M19.5 15.5c0 1.672-1.328 3-3 3a2.98 2.98 0 01-3-3c0-1.672 1.328-3 3-3s3 1.328 3 3zm-2-.001a.986.986 0 01-.998 1.001.99.99 0 01-1.002-1.001.987.987 0 011.002-.999c.564 0 .998.437.998.999zm-3.945.643L10.5 19.25v2.25h2.25l3.042-3"
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
          d="M18.75 9c0 2.871-1.908 5.25-4.5 5.25S9.75 11.871 9.75 9s1.908-5.25 4.5-5.25 4.5 2.379 4.5 5.25zm-7.375 4.072c-4.04 2.991-5.98 7.254-6.124 13.178H15m2.07-13.141c1.867 1.29 3.168 2.808 4.045 4.495m8.134 5.646c0 2.508-1.992 4.5-4.5 4.5a4.471 4.471 0 01-4.5-4.5c0-2.508 1.992-4.5 4.5-4.5s4.5 1.992 4.5 4.5zm-3-.002c0 .843-.651 1.502-1.497 1.502a1.484 1.484 0 01-1.503-1.502c0-.843.657-1.498 1.503-1.498.846 0 1.497.655 1.497 1.498zm-5.918.964l-4.582 4.662v3.375h3.375l4.563-4.5"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUserKeyComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconUserKeyComponent],
  exports: [IconUserKeyComponent],
})
export class IconUserKeyModule {}
