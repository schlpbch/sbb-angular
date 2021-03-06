import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-percent-tag',
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
          d="M9 7.5c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5S7.5 9.84 7.5 9 8.16 7.5 9 7.5m4 6c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5-1.5-.66-1.5-1.5.66-1.5 1.5-1.5M15 8l-8 8M3.5 5.5H17l3.5 6.5-3.5 6.5H3.5v-13z"
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
          d="M13.5 11.25c1.26 0 2.25.99 2.25 2.25s-.99 2.25-2.25 2.25-2.25-.99-2.25-2.25.99-2.25 2.25-2.25m6 9.001c1.26 0 2.25.989 2.25 2.25 0 1.26-.99 2.25-2.25 2.25s-2.25-.99-2.25-2.25c0-1.261.99-2.25 2.25-2.25m3-8.25l-12 12M5.25 8.25H25.5L30.75 18l-5.25 9.75H5.25V8.25z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPercentTagComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconPercentTagComponent],
  exports: [IconPercentTagComponent],
})
export class IconPercentTagModule {}
