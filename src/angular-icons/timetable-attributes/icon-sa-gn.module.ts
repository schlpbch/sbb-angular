import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-gn',
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
        <path
          d="M2.27 13.72l.335-1.234 4.138-4.149.809-.334-.808-.334-4.139-4.147L2.27 2.27l1.234.335L7.66 6.753l.335.811.335-.811 4.156-4.148 1.234-.335-.335 1.252-4.139 4.147-.811.335.811.333 4.139 4.149.335 1.234-1.234-.317L8.33 9.254l-.335-.809-.335.809-4.156 4.149-1.234.317"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaGnComponent extends IconBase {
  constructor() {
    super({ width: '16px', height: '16px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaGnComponent],
  exports: [IconSaGnComponent],
})
export class IconSaGnModule {}
