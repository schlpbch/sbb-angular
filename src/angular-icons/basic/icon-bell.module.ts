import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-bell',
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
          d="M20 18.5c-2.458 0-2.5-2.5-2.5-2.5v-6c0-3.313-2.187-5.5-5.5-5.5S6.5 6.687 6.5 10v6s-.042 2.5-2.5 2.5h16zM14 4h-4m-.5 14.5c0 1.38 1.119 2 2.5 2s2.5-.62 2.5-2"
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
          d="M30 27.75c-3.687 0-3.75-3.75-3.75-3.75v-9c0-4.97-3.28-8.25-8.25-8.25-4.97 0-8.25 3.28-8.25 8.25v9S9.687 27.75 6 27.75h24zM21 6h-6m-.75 21.75c0 2.071 1.678 3 3.75 3s3.75-.929 3.75-3"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBellComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconBellComponent],
  exports: [IconBellComponent],
})
export class IconBellModule {}
