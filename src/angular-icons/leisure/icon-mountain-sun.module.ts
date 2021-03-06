import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-mountain-sun',
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
          d="M21 20.5H6L14 8l7 12.5zm-9.87-8.015L9 10 3 20.5h3m10.723-7.638L15 14l-1-1-2 1-1.122-1.122m-.675-1.475A3.491 3.491 0 007 6.5a3.5 3.5 0 100 7"
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
          d="M31.5 30.75H9L21 12l10.5 18.75zM16.695 18.727L13.5 15l-9 15.75H9m16.084-11.457L22.5 21 21 19.5 18 21l-1.683-1.683m-1.012-2.212A5.237 5.237 0 0015.75 15a5.251 5.251 0 10-5.25 5.25"
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
          d="M22.193 25.161L16 20.001 5.5 38.5h37l-14.177-23M20 29l7.71-13.5m-12.996 23L19 31l5 3.5h6l3.804 4M23 23.5l2.5 2 3-2 3 2 2-2m-13.172.106a7.5 7.5 0 00-5.723-8.931 7.5 7.5 0 00-3.835 14.488M25.166 11.22c-2.14 0-2.565 4.28.8 4.28h6.997c3.318 0 3.198-4.28.699-4.18a2.83 2.83 0 00-5.297-1.991 1.996 1.996 0 00-3.199 1.89z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMountainSunComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconMountainSunComponent],
  exports: [IconMountainSunComponent],
})
export class IconMountainSunModule {}
