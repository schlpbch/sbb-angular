import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-zm',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M4.221 1.037h9.582l-.48 2.2L4.901 12.8h6.361l-.46 2.2H1l.44-2.2 8.402-9.563H3.741zM15.961 1.037h4.621l.94 10.063h.04l5.502-10.063h4.66L28.743 15h-2.96l2.64-11.563h-.04L22.062 15h-2.68L18.261 3.437h-.04L15.66 15H13z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaZmComponent extends IconBase {
  constructor() {
    super({ width: '33px', height: '16px', ratio: 2.0625 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaZmComponent],
  exports: [IconSaZmComponent],
})
export class IconSaZmModule {}
