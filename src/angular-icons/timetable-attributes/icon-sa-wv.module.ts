import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-wv',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 37 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M3.141 1.037h2.801l.42 10.702h.04l4.64-10.702h3.761l.061 10.702h.04l4.94-10.702h2.901L16.083 15h-3.501l-.139-11.162h-.04L7.482 15H4.021zM33.083 1.038l-5.802 10.861h-.04L25.942 1.038h-2.801l1.839 13.963h3.341l7.802-13.963z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaWvComponent extends IconBase {
  constructor() {
    super({ width: '37px', height: '16px', ratio: 2.3125 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaWvComponent],
  exports: [IconSaWvComponent],
})
export class IconSaWvModule {}
