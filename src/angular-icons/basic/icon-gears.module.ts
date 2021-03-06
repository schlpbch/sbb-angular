import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-gears',
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
          d="M19.5 12.5c0 3.886-3.113 7-7 7s-7-3.114-7-7c0-3.887 3.113-7 7-7s7 3.113 7 7zm-4 0c0 1.683-1.317 3-3 3s-3-1.317-3-3 1.317-3 3-3 3 1.317 3 3zm0 0H22m-16.5 0H3m9.5-7V3m0 16.5V22m3.393-3.366L17 20.7M7.755 4.367l3.156 5.575m7.752 5.897l1.993 1.272M18.22 8.446l2.106-1.193M4.03 16.726l2.143-1.213m1.655 5.236l3.19-5.634m4.968-8.696l1.305-2.204M4.166 7.799L6.37 9.104"
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
          d="M29.25 18.75c0 5.83-4.67 10.5-10.5 10.5a10.46 10.46 0 01-10.5-10.5c0-5.83 4.67-10.5 10.5-10.5s10.5 4.67 10.5 10.5zm-6 0c0 2.525-1.976 4.5-4.5 4.5s-4.5-1.975-4.5-4.5c0-2.524 1.976-4.5 4.5-4.5s4.5 1.976 4.5 4.5zm0 0H33m-24.75 0H4.5m14.25-10.5V4.5m0 24.75V33m5.089-5.05l1.66 3.1M11.632 6.552l4.734 8.362m11.629 8.844l2.99 1.908M27.33 12.67l3.159-1.79M6.045 25.09l3.214-1.819m2.482 7.853l4.787-8.451m7.451-13.044l1.958-3.306M6.249 11.698l3.306 1.958"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGearsComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconGearsComponent],
  exports: [IconGearsComponent],
})
export class IconGearsModule {}
