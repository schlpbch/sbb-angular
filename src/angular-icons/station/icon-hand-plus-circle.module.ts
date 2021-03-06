import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-hand-plus-circle',
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
          d="M9.5 2.5a5 5 0 11-.001 10 5 5 0 01.001-10zm0 8.5V4M6 7.5h7m-4.139 9.528L4.126 13.72a1 1 0 00-1.252 1.56L8.8 20.5h3.943l1.008 1h7.45l-5.028-5.064c-1.137-1.094-2.584-1.908-4.063-1.936H10c-1.985 0-2.032 3 0 3h2"
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
          d="M14.25 3.75a7.5 7.5 0 11-.002 15.001A7.5 7.5 0 0114.25 3.75zm0 12.75V6M9 11.25h10.5m-6.208 14.292L6.189 20.58a1.5 1.5 0 00-1.878 2.34l8.888 7.83h5.914l1.512 1.5H31.8l-7.542-7.596c-1.705-1.641-3.876-2.862-6.094-2.904H15c-2.977 0-3.048 4.5 0 4.5h3"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHandPlusCircleComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconHandPlusCircleComponent],
  exports: [IconHandPlusCircleComponent],
})
export class IconHandPlusCircleModule {}
