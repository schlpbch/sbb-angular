import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-calendar',
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
          d="M4.5 6.51h15v11l-15-.03V6.51zm0 3.01h15M13 11.5h4.98M6 13.5h5m-5 2h5m2-2h5m-5 2h5M7.5 8V5m9 3V5"
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
          d="M6.75 9.765h22.5v16.5l-22.5-.045V9.765zm0 4.515h22.5m-9.75 2.97h7.47M9 20.25h7.5m-7.5 3h7.5m3-3H27m-7.5 3H27M11.25 12V7.5m13.5 4.5V7.5"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('large') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          stroke="#1D1D1B"
          d="M9.5 13.5h30v22l-30-.06V13.5zm0 5h30m-13.5 4h10m-23 6h10m-10 3h10m3-6h10m-10 6h10M15.5 16v-6m17 6v-6M26 28.5h10m-23-3h4m2 0h4"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCalendarComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconCalendarComponent],
  exports: [IconCalendarComponent],
})
export class IconCalendarModule {}
