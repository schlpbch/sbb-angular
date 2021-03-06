import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-ep',
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
          d="M4.561 1.037h8.222l-.42 2.2H6.902l-.721 3.441h4.882l-.44 2.201H5.721l-.82 3.921h5.52L9.943 15H1.621zM16.941 7.498h1c1.54 0 3.121-.8 3.121-2.54 0-1.421-1.14-1.721-2.34-1.721h-.88l-.9 4.261zM15.341 15h-2.8L15.5 1.037h2.36c2.58 0 6.121.14 6.121 3.621 0 3.38-2.78 5.041-5.9 5.041h-1.62L15.34 15z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaEpComponent extends IconBase {
  constructor() {
    super({ width: '25px', height: '16px', ratio: 1.5625 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaEpComponent],
  exports: [IconSaEpComponent],
})
export class IconSaEpModule {}
