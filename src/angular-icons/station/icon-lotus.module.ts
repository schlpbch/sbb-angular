import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-lotus',
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
          d="M8.5 9.75c0 2.606 1.29 5.068 3.5 6.676 3.971-2.89 4.667-8.222 1.554-11.909A8.812 8.812 0 0012 3.074C9.79 4.681 8.5 7.144 8.5 9.75zm-5.603 3.226a8.644 8.644 0 00-1.576 1.116A8.475 8.475 0 0010 18.494m4 0a8.473 8.473 0 008.679-4.403 8.61 8.61 0 00-1.576-1.116M6.997 7.206a8.448 8.448 0 00-3.31-.57 8.46 8.46 0 006.424 10.011m6.892-9.44a8.448 8.448 0 013.31-.57 8.46 8.46 0 01-6.424 10.01"
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
          d="M12.75 14.625c0 3.909 1.935 7.602 5.25 10.014 5.956-4.335 7-12.333 2.331-17.863A13.217 13.217 0 0018 4.61c-3.315 2.41-5.25 6.105-5.25 10.014zm-8.404 4.838a12.965 12.965 0 00-2.365 1.674A12.712 12.712 0 0015 27.74m6 0a12.71 12.71 0 0013.019-6.603 12.914 12.914 0 00-2.364-1.674m-21.16-8.654a12.673 12.673 0 00-4.966-.855c-1.443 6.8 2.853 13.497 9.638 15.017m10.337-14.162a12.673 12.673 0 014.967-.855c1.443 6.8-2.853 13.497-9.638 15.017"
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
          d="M17.5 23.5A16.957 16.957 0 0024 36.852c7.373-5.78 8.666-16.442 2.886-23.816A16.919 16.919 0 0024 10.148 16.957 16.957 0 0017.5 23.5zm10.232 11.794c9.046-2.026 14.775-10.955 12.85-20.022a17.07 17.07 0 00-9.018 2.246m-15.13 0a17.07 17.07 0 00-9.018-2.246c-1.925 9.067 3.805 17.996 12.85 20.022m4.267-1.092h-.003.003zm-1.064 0h0-.003.003zm-16.467-8.25a17.207 17.207 0 00-3.153 2.23 16.947 16.947 0 0017.36 8.804m5.582 0a16.946 16.946 0 0017.358-8.804 17.165 17.165 0 00-3.152-2.23"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLotusComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconLotusComponent],
  exports: [IconLotusComponent],
})
export class IconLotusModule {}
