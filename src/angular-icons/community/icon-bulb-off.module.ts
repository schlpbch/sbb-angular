import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-bulb-off',
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
          d="M9.9 16c-1.4-.8-2.4-2.3-2.4-4 0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 1.7-1 3.3-2.4 4m.4 0v2.1l-2 .7v.7h-1v-.7l-2-.7V16h5z"
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
          d="M14.85 24c-2.1-1.2-3.6-3.45-3.6-6 0-3.75 3-6.75 6.75-6.75s6.75 3 6.75 6.75c0 2.55-1.5 4.95-3.6 6m.6 0v3.15l-3 1.05v1.05h-1.5V28.2l-3-1.05V24h7.5z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBulbOffComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconBulbOffComponent],
  exports: [IconBulbOffComponent],
})
export class IconBulbOffModule {}
