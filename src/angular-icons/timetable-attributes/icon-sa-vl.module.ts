import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-vl',
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
          d="M3.141 1.037h2.801l1.3 10.862h.04l5.801-10.862h3.04L8.322 15H4.981zM17.761 1.037h2.801L18.061 12.8h5.481l-.48 2.2H14.8z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaVlComponent extends IconBase {
  constructor() {
    super({ width: '25px', height: '16px', ratio: 1.5625 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaVlComponent],
  exports: [IconSaVlComponent],
})
export class IconSaVlModule {}
