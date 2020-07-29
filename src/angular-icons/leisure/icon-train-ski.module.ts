import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-train-ski',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="#000"
        d="M18 32.5l2.5 6m-14 0l2.5-6m11.5 3h-14m15.5 3H5m5.5-11a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2zm.5-11h-7m-.265-3c-2.824 0-4.235 1.445-4.235 4.275V32.5h16V17.775c0-2.83-1.41-4.275-4.236-4.275H9.735zm11.765 11h-16M18 9.5H9m4.5 4l-2-4m16 5a1.5 1.5 0 10-3 0v24h3v-24zm6 0a1.5 1.5 0 10-3 0v24h3v-24zm4.827 23.117l-2.954-.52m6.037-23.93l-4.82 25.666m4.083-1.216l2.954-.52m-6.037-23.93l4.82 25.666m-5.038-21.502l-.563-3m5.382 0l-.563 3M15.5 9.5l-2 4"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTrainSkiComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconTrainSkiComponent],
  exports: [IconTrainSkiComponent],
})
export class IconTrainSkiModule {}
