import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-product-ir-55',
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
          d="M44.09 4.235v2.057h-4.644l-.496 2.603a2.807 2.807 0 012.136-.886 3.677 3.677 0 012.223.688c.936.69 1.403 1.74 1.403 3.148 0 1.382-.499 2.476-1.497 3.283a4.283 4.283 0 01-2.791.949c-1.22 0-2.2-.328-2.94-.985-.742-.656-1.133-1.544-1.175-2.662h2.262c.026.377.163.738.394 1.036a1.917 1.917 0 002.902.016c.347-.443.528-.994.512-1.558.03-.58-.163-1.15-.536-1.594a1.824 1.824 0 00-1.427-.597 1.896 1.896 0 00-1.695.98l-2.057-.031 1.095-6.447h6.33zm8.979 0v2.057h-4.643l-.497 2.603a2.807 2.807 0 012.136-.886 3.677 3.677 0 012.223.688c.936.69 1.404 1.74 1.404 3.148 0 1.382-.5 2.476-1.498 3.283a4.283 4.283 0 01-2.79.949c-1.22 0-2.2-.328-2.941-.985-.741-.656-1.133-1.544-1.175-2.662h2.263c.025.377.162.738.394 1.036a1.917 1.917 0 002.9.016c.348-.443.53-.994.513-1.558.03-.58-.162-1.15-.536-1.594a1.824 1.824 0 00-1.427-.597 1.896 1.896 0 00-1.695.98l-2.057-.031 1.096-6.447h6.33zM9.22 4.2h4.056L8.258 15.8H4.185zM25.98 12.366a.925.925 0 00.847-.553L30.119 4.2H15.984l-5.018 11.6h4.038l3.8-8.69h5.993l-1.201 2.775-5.226-.019 4.217 5.934h4.597l-3.124-3.434h1.92z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIr55Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIr55Component],
  exports: [IconProductIr55Component],
})
export class IconProductIr55Module {}
