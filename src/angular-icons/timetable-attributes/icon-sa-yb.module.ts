import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-yb',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M6.421 9.219l-3.28-8.182h2.961l2.08 5.862 4.541-5.862h3.261L9.222 9.219 8.002 15H5.201zM19.18 6.678h1.102c1.42 0 2.96-.4 2.96-2.04 0-1.34-1.28-1.4-2.34-1.4h-.981l-.74 3.44zM17.9 12.8h.96c1.72 0 3.642-.2 3.642-2.36 0-1.461-1.36-1.681-2.861-1.681h-.9l-.84 4.04zm-.22-11.763h4.142c2.18 0 4.22.8 4.22 3.34 0 1.7-1.36 3.062-2.98 3.322v.04c1.56.24 2.24 1.44 2.24 2.94 0 4-4.48 4.32-6.56 4.32H14.76l2.92-13.962z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaYbComponent extends IconBase {
  constructor() {
    super({ width: '27px', height: '16px', ratio: 1.6875 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaYbComponent],
  exports: [IconSaYbComponent],
})
export class IconSaYbModule {}
