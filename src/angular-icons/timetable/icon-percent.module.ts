import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-percent',
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
          d="M11.498 9.997a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 16a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-8 1.5l9-9-9 9z"
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
          d="M17.246 14.996a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM23.25 24a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-12 2.25l13.5-13.5-13.5 13.5z"
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
          stroke="#000"
          d="M22.5 17.5a3 3 0 11-6 0 3 3 0 016 0zm9 13a3 3 0 11-6 0 3 3 0 016 0zM15 33l18-18-18 18z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPercentComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconPercentComponent],
  exports: [IconPercentComponent],
})
export class IconPercentModule {}
