import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-contact',
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
          d="M5.5 19.5h13v-15h-13v15zM4 8.5h3m-3 4h3m-3 4h3m6.5-6.99c0 1.12-.649 1.99-1.5 1.99s-1.5-.88-1.5-2 .649-2 1.5-2 1.5.89 1.5 2.01zm-2.645 1.286c-1.367.68-2.354 2.518-2.354 4.704h7c0-2.184-.987-4.022-2.353-4.703"
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
          d="M8.25 29.25h19.5V6.75H8.25v22.5zM6 12.75h4.5m-4.5 6h4.5m-4.5 6h4.5m9.75-10.485c0 1.68-.974 2.985-2.25 2.985s-2.25-1.321-2.25-3c0-1.68.974-3 2.25-3s2.25 1.335 2.25 3.015zm-3.967 1.93c-2.052 1.02-3.532 3.777-3.532 7.056h10.5c0-3.276-1.48-6.033-3.53-7.055"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconContactComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconContactComponent],
  exports: [IconContactComponent],
})
export class IconContactModule {}
