import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-product-ic',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 59 20"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="59" height="20" fill="#EB0000" rx="2" />
        <path
          fill="#FFF"
          fill-rule="nonzero"
          d="M9.221 4.2h4.056L8.259 15.8H4.186zM15.948 4.2h14.395l-1.49 3.445H18.572l-2.041 4.71h10.285l-1.49 3.445H10.931z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIcComponent extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIcComponent],
  exports: [IconProductIcComponent],
})
export class IconProductIcModule {}
