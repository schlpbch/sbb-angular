import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-platform',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="#000"
        d="M12.506 32a1.5 1.5 0 10-3 .001 1.5 1.5 0 003-.001zm3-5.5h-11.5m6-18H4m4.006 9H4.002m3.004-9l-2 6h5.99c3.008 0 4.51 1.477 4.51 4.367V37.5h-11.5m7 0l3 5.5m1-2.5H4m39.506-36h-23.5c-.822 0-1.5.678-1.5 1.5v1.5h25v-3zm-20 9h10v-4h-10v4zm2-6v2m6-2v2m-13 28h25v-2h-25v2zm21-2h2v-28h-2v28zm-19 2V43"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPlatformComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconPlatformComponent],
  exports: [IconPlatformComponent],
})
export class IconPlatformModule {}
