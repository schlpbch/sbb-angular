import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-z',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 16"
    >
      <path
        fill-rule="evenodd"
        d="M4.221 1.037h9.582l-.48 2.2L4.901 12.8h6.361l-.46 2.2H1l.44-2.2 8.402-9.563H3.741z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaZComponent extends IconBase {
  constructor() {
    super({ width: '15px', height: '16px', ratio: 0.9375 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaZComponent],
  exports: [IconSaZComponent],
})
export class IconSaZModule {}
