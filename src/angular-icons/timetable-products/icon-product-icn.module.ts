import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-product-icn',
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
          d="M6.606 4.19L4.186 15.8h2.42L9.044 4.19H6.606zm12.236 2.312l.58-1.947a12.79 12.79 0 00-.754-.24 7.793 7.793 0 00-.522-.126c-.34-.064-.683-.111-1.028-.141-.41-.039-.78-.058-1.111-.058a7.372 7.372 0 00-2.694.474 5.905 5.905 0 00-3.44 3.41 7.15 7.15 0 00-.481 2.67c0 1.73.492 3.1 1.475 4.11.907.887 2.2 1.33 3.88 1.33.391-.002.781-.03 1.169-.083.425-.055.848-.128 1.268-.216l.365-2.23c-.38.227-.783.411-1.202.55-.374.112-.762.169-1.152.166a3.483 3.483 0 01-1.385-.266 2.932 2.932 0 01-1.06-.766 3.524 3.524 0 01-.68-1.197 4.731 4.731 0 01-.241-1.547 5.01 5.01 0 01.332-1.855c.208-.541.524-1.033.928-1.448a4.147 4.147 0 011.418-.94 4.79 4.79 0 011.815-.332 4.91 4.91 0 011.26.15c.44.126.863.305 1.26.532zm2.42-2.313l-2.486 11.612h2.222l1.856-8.9h.017l2.42 8.9h2.985L30.763 4.19H28.59l-1.89 8.817h-.033l-2.47-8.817h-2.935z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIcnComponent extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIcnComponent],
  exports: [IconProductIcnComponent],
})
export class IconProductIcnModule {}
