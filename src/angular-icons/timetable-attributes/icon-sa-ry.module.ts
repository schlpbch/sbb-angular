import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-ry',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M5.941 6.998h1.02c1.501 0 3.321-.46 3.321-2.3 0-1.461-1.26-1.461-2.4-1.461h-1.16l-.78 3.761zm-1.6-5.961h3.3c2.58 0 5.561-.04 5.561 3.301 0 2.4-1.8 3.681-4.08 3.721v.04c.76.04 1.24.519 1.42 1.28L11.882 15h-2.94l-.68-3.28c-.32-1.481-.24-2.521-1.76-2.521h-1.06L4.22 15h-2.8L4.34 1.037zM18.281 9.219l-3.28-8.182h2.961l2.08 5.862 4.541-5.862h3.261l-6.762 8.182L19.862 15h-2.801z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaRyComponent extends IconBase {
  constructor() {
    super({ width: '29px', height: '16px', ratio: 1.8125 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaRyComponent],
  exports: [IconSaRyComponent],
})
export class IconSaRyModule {}
