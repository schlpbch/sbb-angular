import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-link',
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
          d="M13.268 10.94l-.707-.708a3.01 3.01 0 00-4.243 0l-4.242 4.243a3.009 3.009 0 000 4.243l.707.706a3.01 3.01 0 004.242 0l2.48-2.48m-1.773-3.883l.707.707a3.008 3.008 0 004.242 0l4.243-4.244a3.008 3.008 0 000-4.241l-.707-.708a3.009 3.009 0 00-4.243 0L11.5 7.051"
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
          d="M19.901 16.41l-1.06-1.063a4.516 4.516 0 00-6.365 0l-6.363 6.365a4.513 4.513 0 000 6.364l1.06 1.06a4.514 4.514 0 006.364 0l3.72-3.72m-2.658-5.825l1.06 1.06a4.511 4.511 0 006.363 0l6.365-6.364a4.511 4.511 0 000-6.363l-1.06-1.06a4.513 4.513 0 00-6.365 0l-3.711 3.712"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLinkComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconLinkComponent],
  exports: [IconLinkComponent],
})
export class IconLinkModule {}
