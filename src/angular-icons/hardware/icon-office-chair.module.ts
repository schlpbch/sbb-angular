import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-office-chair',
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
          d="M7.5 16.5h9v-2h-9v2zm4-2h1v-2h-1v2zm0 6h1v-4h-1v4zm-3.5 0h8m-7.5-8h7v-8h-7v8zm9 1.5v-3m-11 3v-3"
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
          d="M11.25 24.75h13.5v-3h-13.5v3zm6-3h1.5v-3h-1.5v3zm0 9h1.5v-6h-1.5v6zm-5.25 0h12m-11.25-12h10.5v-12h-10.5v12zM26.25 21v-4.5M9.75 21v-4.5"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconOfficeChairComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconOfficeChairComponent],
  exports: [IconOfficeChairComponent],
})
export class IconOfficeChairModule {}
