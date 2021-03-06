import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-shopping-bag-coupon',
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
        <g fill="none" fill-rule="evenodd" stroke="#000">
          <path d="M8.5 10V5.5a3 3 0 116 0V10m-9-2.5l-1 13h14l-1-13h-12zm6 4.5v5" />
          <path stroke-dasharray="1 1" d="M15.5 14.5a4 4 0 10-8 0 4 4 0 008 0z" />
        </g>
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <g fill="none" fill-rule="evenodd" stroke="#000">
          <path
            d="M12.75 15V8.25a4.5 4.5 0 119 0V15m-13.5-3.75l-1.5 19.5h21l-1.5-19.5h-18zm9 6.75v7.5"
          />
          <path stroke-dasharray="1 1" d="M23.25 21.75a6 6 0 10-12 0 6 6 0 0012 0z" />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconShoppingBagCouponComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconShoppingBagCouponComponent],
  exports: [IconShoppingBagCouponComponent],
})
export class IconShoppingBagCouponModule {}
