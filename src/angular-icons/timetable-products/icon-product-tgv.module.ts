import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-product-tgv',
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
          d="M4.583 4.201h8.924l-.38 1.828H9.864l-2.103 9.768H5.345L7.447 6.03H4.186L4.583 4.2zm18.61 2.46a7.156 7.156 0 00-.654-.35 6.826 6.826 0 00-.903-.307 5.88 5.88 0 00-1.572-.174c-1.37 0-2.49.454-3.361 1.362-.872.908-1.308 2.065-1.308 3.472 0 1.096.309 1.955.927 2.575.618.62 1.479.93 2.583.93a2.6 2.6 0 00.894-.116l.645-3.074h-2.45l.38-1.827h4.686l-1.324 6.33c-.22.077-.42.14-.596.19-.177.05-.475.117-.894.2a8.959 8.959 0 01-1.672.125c-1.822 0-3.21-.446-4.164-1.338-.955-.891-1.433-2.179-1.433-3.862 0-2.082.632-3.735 1.896-4.96 1.264-1.223 2.967-1.835 5.108-1.835.655-.003 1.309.052 1.954.166.623.115 1.237.276 1.837.482l-.58 2.01zm2.202-2.46h2.318l1.076 9.021 4.834-9.02h2.517l-6.457 11.595h-2.765L25.395 4.201z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductTgvComponent extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductTgvComponent],
  exports: [IconProductTgvComponent],
})
export class IconProductTgvModule {}
