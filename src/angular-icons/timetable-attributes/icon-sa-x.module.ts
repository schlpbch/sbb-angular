import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-x',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 16"
    >
      <path
        fill-rule="evenodd"
        d="M7.421 1.037l2.021 4.801h.04l3.84-4.801h3.301l-5.781 6.661L14.082 15h-3.06l-2.14-5.602h-.04L4.481 15H1l6.461-7.582L4.4 1.037z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaXComponent extends IconBase {
  constructor() {
    super({ width: '18px', height: '16px', ratio: 1.125 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaXComponent],
  exports: [IconSaXComponent],
})
export class IconSaXModule {}
