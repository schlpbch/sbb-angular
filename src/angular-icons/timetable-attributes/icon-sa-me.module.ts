import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-me',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M4.581 1.037h4.621l.94 10.063h.04l5.502-10.063h4.66L17.363 15h-2.96l2.64-11.563h-.039L10.682 15h-2.68L6.881 3.437h-.04L4.28 15H1.62zM23.44 1.037h8.222l-.42 2.2h-5.461l-.721 3.441h4.882l-.44 2.201H24.6l-.82 3.921h5.521l-.479 2.2H20.5z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaMeComponent extends IconBase {
  constructor() {
    super({ width: '33px', height: '16px', ratio: 2.0625 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaMeComponent],
  exports: [IconSaMeComponent],
})
export class IconSaMeModule {}
