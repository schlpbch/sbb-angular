import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-dog',
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
          d="M14.5 20v-5.5h-4c-2.167.03-2 5.5-2 5.5m-2 0v-9.5l7-1 4-4v2l3 3-2 2-1-1-1 1V20m-10-9.5s-4 .051-4-2.49M17 9.5a.5.5 0 10-1 0 .5.5 0 001 0"
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
          d="M21.75 30v-8.25h-6c-3.25.045-3 8.25-3 8.25m-3 0V15.75l10.5-1.5 6-6v3l4.5 4.5-3 3-1.5-1.5-1.5 1.5V30m-15-14.25s-6 .077-6-3.736M25.5 14.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDogComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconDogComponent],
  exports: [IconDogComponent],
})
export class IconDogModule {}
