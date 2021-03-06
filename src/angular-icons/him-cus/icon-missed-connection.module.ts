import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-missed-connection',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="16" height="16" fill="#EB0000" rx="2" />
        <path
          fill="#FFF"
          d="M8.779 9.2c0 .45-.33.81-.75.81s-.75-.36-.75-.81V6.02c0-.45.33-.81.75-.81s.75.36.75.81V9.2zm-.78 3.21c-.42 0-.75-.36-.75-.81 0-.45.33-.81.75-.81s.75.36.75.81c0 .45-.33.81-.75.81zm5.911.42L8.688 2.42c-.15-.27-.39-.42-.69-.42a.72.72 0 00-.66.42L2.087 12.83c-.12.24-.12.54.03.78a.7.7 0 00.63.39H13.25c.27 0 .51-.15.66-.39a.89.89 0 000-.78z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMissedConnectionComponent extends IconBase {
  constructor() {
    super({ width: '16px', height: '16px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconMissedConnectionComponent],
  exports: [IconMissedConnectionComponent],
})
export class IconMissedConnectionModule {}
