/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-car-parking',
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
          d="M20.5 18.5h-12V11A2.5 2.5 0 0 1 11 8.5h7a2.5 2.5 0 0 1 2.5 2.5v7.5zm-18-9h4v-5h-4v5zm2 0V21m4-2.5v2h3v-2m6.001 0v2H20.5v-2m-12-6H7m15 0h-1.5m0 1h-12m10 0a2 2 0 0 0-4 0m-3 2.5a.5.5 0 1 0-1.002.001A.5.5 0 0 0 11.5 16zm7 0a.5.5 0 1 0-1.002.001A.5.5 0 0 0 18.5 16z"
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
          d="M30.75 27.75h-18V16.5a3.75 3.75 0 0 1 3.75-3.75H27a3.75 3.75 0 0 1 3.75 3.75v11.25zm-27-13.5h6v-7.5h-6v7.5zm3 0V31.5m6-3.75v3h4.5v-3m9.002 0v3h4.498v-3m-18-8.999H10.5m22.5 0h-2.25m0 1.5h-18m15-.001a3.001 3.001 0 0 0-6 0M17.25 24a.751.751 0 0 0-1.5 0 .75.75 0 0 0 1.5 0zm10.5 0a.751.751 0 0 0-1.5 0 .75.75 0 0 0 1.5 0z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCarParkingComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconCarParkingComponent],
  exports: [IconCarParkingComponent]
})
export class IconCarParkingModule {}