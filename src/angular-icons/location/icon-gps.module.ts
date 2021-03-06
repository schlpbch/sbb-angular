import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-gps',
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
          d="M19.5 12.5c0 3.876-3.123 7-7 7s-7-3.124-7-7c0-3.877 3.123-7 7-7s7 3.123 7 7zm-3 0a4 4 0 11-8.002-.001 4 4 0 018.002.001zm-10.996 0H3m16.504-.004h2.495M12.504 19.5V22m0-16.5V3"
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
          d="M29.25 18.75a10.48 10.48 0 01-10.5 10.5 10.48 10.48 0 01-10.5-10.5c0-5.815 4.684-10.5 10.5-10.5s10.5 4.685 10.5 10.5zm-4.5 0a6.001 6.001 0 01-12 0 6 6 0 0112 0zm-16.494 0H4.5m24.756-.006h3.742M18.756 29.25V33m0-24.75V4.5"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGpsComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconGpsComponent],
  exports: [IconGpsComponent],
})
export class IconGpsModule {}
