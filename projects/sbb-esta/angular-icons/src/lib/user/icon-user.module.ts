/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-user',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#000"
          d="M10.084 11.697C7.144 12.757 5.5 16.25 5.5 19.5h13c0-3.27-1.648-6.753-4.588-7.803M12 5.5c1.657 0 3 1.567 3 3.5s-1.343 3.5-3 3.5S9 10.933 9 9s1.343-3.5 3-3.5z"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M15.126 17.546c-4.41 1.59-6.876 6.829-6.876 11.704h19.5c0-4.905-2.472-10.13-6.882-11.704M18 8.25c2.485 0 4.5 2.35 4.5 5.25 0 2.899-2.015 5.25-4.5 5.25-2.486 0-4.5-2.351-4.5-5.25 0-2.9 2.014-5.25 4.5-5.25z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconUserComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconUserComponent],
  exports: [IconUserComponent]
})
export class IconUserModule {}