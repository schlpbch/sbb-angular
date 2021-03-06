import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-product-ir-56',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 59 20"
    >
      <defs><path id="a" d="M0 0h59v20H0z" /></defs>
      <g fill="none" fill-rule="evenodd">
        <mask id="b" fill="#fff"><use xlink:href="#a" /></mask>
        <path
          fill="#E20613"
          d="M57.208 20H1.792C.802 20 0 19.194 0 18.2V1.8C0 .806.802 0 1.792 0h55.416C58.198 0 59 .806 59 1.8v16.4c0 .994-.802 1.8-1.792 1.8"
          mask="url(#b)"
        />
        <path
          fill="#FFF"
          d="M9.22 4.2h4.056L8.258 15.8H4.185zM25.98 12.366a.925.925 0 00.847-.554L30.119 4.2H15.984l-5.018 11.6h4.038l3.8-8.69h5.993l-1.202 2.775-5.225-.019 4.216 5.934h4.598l-3.124-3.434h1.92zm18.12-8.13v2.059h-4.65L38.955 8.9c.557-.591 1.27-.887 2.139-.887.852 0 1.594.23 2.225.689.937.692 1.405 1.742 1.405 3.152 0 1.383-.5 2.479-1.5 3.286-.778.634-1.71.95-2.793.95-1.221 0-2.202-.328-2.944-.985s-1.134-1.546-1.176-2.665h2.265c.037.407.168.752.395 1.037.352.45.841.673 1.467.673.605 0 1.084-.219 1.437-.657.342-.428.513-.947.513-1.56 0-.665-.18-1.197-.537-1.596-.358-.398-.834-.597-1.428-.597-.727 0-1.292.327-1.697.982l-2.06-.032 1.097-6.454H44.1zm5.461 5.543c-.552 0-.992.232-1.318.697-.295.412-.442.903-.442 1.473 0 .565.15 1.059.45 1.48.326.47.774.706 1.342.706.552 0 .997-.225 1.334-.673.315-.423.473-.922.473-1.497 0-.565-.142-1.048-.426-1.45-.347-.49-.818-.736-1.413-.736m3.907-2.653h-2.194c-.205-.892-.71-1.338-1.516-1.338-.852 0-1.457.525-1.815 1.576-.147.427-.266 1.074-.355 1.94.347-.47.717-.808 1.109-1.014.392-.206.864-.308 1.417-.308 1.083 0 1.954.385 2.612 1.156.626.728.94 1.642.94 2.74 0 1.304-.422 2.352-1.264 3.144-.757.712-1.668 1.069-2.73 1.069-1.363 0-2.423-.516-3.181-1.549-.758-1.032-1.136-2.472-1.136-4.32 0-1.974.405-3.52 1.215-4.64.784-1.082 1.855-1.624 3.212-1.624 1.279 0 2.257.43 2.936 1.291.39.497.64 1.122.75 1.877"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIr56Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIr56Component],
  exports: [IconProductIr56Component],
})
export class IconProductIr56Module {}
