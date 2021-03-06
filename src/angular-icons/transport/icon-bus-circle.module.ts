import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-bus-circle',
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
          d="M5.5 16.5v2h3v-2m7.001 0v2H18.5v-2m-13-8h-1v1h1m10.5-4H8m10.5 5h-13M4 16.888c-.947.468-1.5 1.021-1.5 1.612 0 1.645 4.232 3 9.5 3 5.269 0 9.5-1.355 9.5-3 0-.59-.553-1.144-1.5-1.61M16 3.5c1.706 0 2.5.794 2.5 2.5v10.5h-13V6c0-1.706.794-2.5 2.5-2.5h8M8.5 14A.5.5 0 107.498 14 .5.5 0 008.5 14zm8 0a.5.5 0 10-1.002.001A.5.5 0 0016.5 14zm2-4.5h1v-1h-1"
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
          d="M8.25 24.75v3h4.5v-3m10.502 0v3h4.498v-3m-19.5-12h-1.5v1.5h1.5m15.75-6H12m15.75 7.501H8.25M6 25.331c-1.42.702-2.25 1.532-2.25 2.418 0 2.468 6.348 4.5 14.25 4.5 7.904 0 14.25-2.032 14.25-4.5 0-.886-.83-1.716-2.25-2.416M24 5.25c2.559 0 3.75 1.191 3.75 3.75v15.75H8.25V9c0-2.559 1.191-3.75 3.75-3.75h12M12.75 21a.751.751 0 00-1.5 0 .75.75 0 001.5 0zm12 0a.751.751 0 00-1.5 0 .75.75 0 001.5 0zm3-6.75h1.5v-1.5h-1.5"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBusCircleComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconBusCircleComponent],
  exports: [IconBusCircleComponent],
})
export class IconBusCircleModule {}
