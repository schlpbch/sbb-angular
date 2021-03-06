import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-shopping-cart',
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
          d="M4 5.5h2.5v10H18m-11.5-8h13l-2 6.01-11-.01m3.991 5a1 1 0 11-1.998.002 1 1 0 011.998-.002zm6.009 0a1 1 0 11-1.998.002A1 1 0 0116.5 18.5z"
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
          d="M6 8.25h3.75v15H27m-17.25-12h19.5l-3 9.014-16.5-.014m5.987 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm9.013 0c0 .829-.67 1.5-1.5 1.5s-1.5-.671-1.5-1.5a1.5 1.5 0 113 0z"
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
          d="M9 11.5h4.5v20H35m-21.5-16h25.48l-3.48 12h-22m7 9a2 2 0 11-4.001-.002 2 2 0 014.001.002zm11 0a2 2 0 11-4.001-.002 2 2 0 014.001.002zM19 19.5h14m-14 4h12"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconShoppingCartComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconShoppingCartComponent],
  exports: [IconShoppingCartComponent],
})
export class IconShoppingCartModule {}
