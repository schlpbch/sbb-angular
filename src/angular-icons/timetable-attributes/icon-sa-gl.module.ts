import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-gl',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path d="M1 1h14v14H1V1zm1.273 12.727h11.454V2.273H2.273v11.454z" />
        <path d="M2.27 13.72l.335-1.234 9.881-9.881 1.234-.335-.335 1.252-9.881 9.88-1.234.318" />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaGlComponent extends IconBase {
  constructor() {
    super({ width: '16px', height: '16px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaGlComponent],
  exports: [IconSaGlComponent],
})
export class IconSaGlModule {}
