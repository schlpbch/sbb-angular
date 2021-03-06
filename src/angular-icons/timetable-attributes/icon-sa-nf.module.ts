import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-nf',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M13.342 1.038L11.063 11.64h-.04L8.04 1.038H4.5l-3 13.963h2.681L6.402 4.299h.039l2.92 10.702h3.602l3.02-13.963zM19 1.038l-2.94 13.963h2.801L20.14 8.88h4.681l.441-2.202h-4.661l.74-3.44h4.881l.48-2.2z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaNfComponent extends IconBase {
  constructor() {
    super({ width: '28px', height: '16px', ratio: 1.75 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaNfComponent],
  exports: [IconSaNfComponent],
})
export class IconSaNfModule {}
