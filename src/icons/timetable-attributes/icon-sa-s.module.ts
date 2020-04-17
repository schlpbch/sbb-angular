import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-s',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 16"
    >
      <path
        fill-rule="evenodd"
        d="M11.402 3.718c-.82-.42-1.88-.721-2.9-.721-1 0-2.34.4-2.34 1.6 0 2.24 4.76 2.1 4.76 5.982 0 3.42-2.68 4.66-5.742 4.66-1.34 0-2.72-.32-3.98-.78l.72-2.38c1.08.5 2.22.96 3.42.96 1.341 0 2.662-.68 2.662-2.18 0-2.52-4.762-2.12-4.762-5.841C3.24 2.077 5.76.797 8.441.797c1.221 0 2.481.16 3.621.62l-.66 2.3z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSaSComponent extends IconBase {
  constructor() {
    super({ width: '13px', height: '16px', ratio: 0.8125 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaSComponent],
  exports: [IconSaSComponent]
})
export class IconSaSModule {}