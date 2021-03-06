import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-bus',
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
          d="M4.5 18.5v2h3v-2m9.001 0v2H19.5v-2M17 5.5H7m12.5 6h-15m0-2h-1v1h1m12.5-7c1.706 0 2.5.794 2.5 2.5v12.5h-15V6c0-1.706.794-2.5 2.5-2.5h10zM7.5 16A.5.5 0 106.498 16 .5.5 0 007.5 16zm10 0a.5.5 0 10-1.002.001A.5.5 0 0017.5 16zm2-5.5h1v-1h-1"
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
          d="M6.75 27.75v3h4.5v-3m13.502 0v3h4.498v-3M25.5 8.25h-15m18.75 9.001H6.75m0-3h-1.5v1.5h1.5M25.5 5.25c2.559 0 3.75 1.19 3.75 3.75v18.75H6.75V9c0-2.56 1.191-3.75 3.75-3.75h15zM11.25 24a.751.751 0 00-1.5 0 .75.75 0 001.5 0zm15 0a.751.751 0 00-1.5 0 .75.75 0 001.5 0zm3-8.25h1.5v-1.5h-1.5"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBusComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconBusComponent],
  exports: [IconBusComponent],
})
export class IconBusModule {}
