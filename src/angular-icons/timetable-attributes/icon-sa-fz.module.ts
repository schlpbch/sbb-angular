import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-fz',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M4.561 1.037h7.701l-.479 2.2H6.902l-.74 3.441h4.66l-.44 2.201h-4.68L4.42 15H1.621zM13.961 1.037h9.582l-.48 2.2-8.422 9.563h6.361l-.46 2.2H10.74l.44-2.2 8.402-9.563h-6.101z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaFzComponent extends IconBase {
  constructor() {
    super({ width: '25px', height: '16px', ratio: 1.5625 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaFzComponent],
  exports: [IconSaFzComponent],
})
export class IconSaFzModule {}
