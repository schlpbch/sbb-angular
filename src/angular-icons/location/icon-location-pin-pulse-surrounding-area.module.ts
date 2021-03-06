import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-location-pin-pulse-surrounding-area',
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
          d="M17.5 8.015a5.5 5.5 0 00-11 0c.037.943.316 1.736.766 2.485l4.75 7.499 4.75-7.5c.443-.775.726-1.584.734-2.484zm-8.698 7.66C5.119 16.09 2.5 17.206 2.5 18.5c0 1.645 4.232 3 9.5 3 5.269 0 9.5-1.355 9.5-3 0-1.284-2.58-2.392-6.218-2.816M6.787 9.5H9l1.5-4 1.5 6 1.5-4 1 1.99h2.734"
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
          d="M26.25 12.022a8.25 8.25 0 00-16.5 0c.056 1.415.474 2.604 1.149 3.728l7.125 11.248 7.125-11.248c.665-1.164 1.089-2.378 1.101-3.728zm-13.047 11.49c-5.525.625-9.453 2.298-9.453 4.237 0 2.468 6.348 4.5 14.25 4.5 7.903 0 14.25-2.032 14.25-4.5 0-1.924-3.87-3.586-9.327-4.222M10.18 14.25h3.32l2.25-6 2.25 9 2.25-6 1.5 2.985h4.1"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLocationPinPulseSurroundingAreaComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconLocationPinPulseSurroundingAreaComponent],
  exports: [IconLocationPinPulseSurroundingAreaComponent],
})
export class IconLocationPinPulseSurroundingAreaModule {}
