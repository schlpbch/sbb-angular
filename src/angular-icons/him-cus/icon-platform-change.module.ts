import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-platform-change',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="16" height="16" fill="#EB0000" rx="2" />
        <path
          fill="#FFF"
          d="M11.288 5.278l-.542.893 1.281.778 1.942-3.197L10.77 1.8l-.78 1.28 1.152.704c-.963.085-1.902.384-2.695 1.307.32.36.616.79.885 1.311.532-.81 1.16-1.058 1.956-1.123M4 9.75H2v1.5h2c.96 0 1.932-.083 2.798-.66a8.972 8.972 0 01-.632-1.409c-.586.5-1.283.57-2.166.57"
        />
        <path
          fill="#FFF"
          d="M12.027 8.929l-1.28.778.541.894c-1.129-.092-1.925-.525-2.577-2.462-1.094-3.24-2.927-3.51-4.71-3.51H2v1.5h2c1.523 0 2.505.168 3.288 2.49.917 2.72 2.358 3.345 3.854 3.476L9.99 12.8l.781 1.279 3.2-1.953-1.943-3.197z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPlatformChangeComponent extends IconBase {
  constructor() {
    super({ width: '16px', height: '16px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconPlatformChangeComponent],
  exports: [IconPlatformChangeComponent],
})
export class IconPlatformChangeModule {}
