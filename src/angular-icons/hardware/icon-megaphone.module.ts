import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-megaphone',
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
          d="M6.707 13.5l6 6-2 2-3-3-1 1-3-3 3-3zm4.5 1.5c1.415-1.414 1.763-2.17 7.5-1.5l1-1-9-9-1 1c.669 5.737-.085 6.086-1.5 7.5l3 3zm8-11l-3 3m-1.5-5v3m6.5 3.5h-3"
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
          d="M10.06 20.25l9 9-3 3-4.5-4.5-1.5 1.5-4.5-4.5 4.5-4.5zm6.75 2.25c2.123-2.121 2.645-3.254 11.25-2.25l1.5-1.5-13.5-13.5-1.5 1.5c1.004 8.605-.127 9.129-2.25 11.25l4.5 4.5zm12-16.5l-4.5 4.5M22.06 3v4.5m9.75 5.25h-4.5"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMegaphoneComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconMegaphoneComponent],
  exports: [IconMegaphoneComponent],
})
export class IconMegaphoneModule {}
