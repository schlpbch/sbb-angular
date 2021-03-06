import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-weight',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#000"
            d="M5.5 7.5h13l2 13h-17l2-13zm8.5-2A2 2 0 119.999 5.5 2 2 0 0114 5.5z"
          />
          <path
            fill="#000"
            d="M11.834 12.01l-2.238 2.258 2.449 3.453h-1.574l-1.734-2.563-.719.72v1.843H6.772v-5.71h1.246v2.363l2.238-2.364h1.578zm5.46 2.633v3.078h-.796l-.125-.652c-.422.525-.991.79-1.707.79-.872 0-1.561-.323-2.066-.97-.42-.539-.63-1.205-.63-1.996 0-.898.274-1.634.82-2.207.514-.542 1.177-.813 1.989-.813.75 0 1.36.243 1.832.727.352.365.554.794.606 1.29H16.01c-.063-.309-.202-.548-.42-.72-.218-.172-.493-.257-.826-.257-.505 0-.896.195-1.172.585-.242.341-.363.802-.363 1.383 0 .568.113 1.018.339 1.352.279.408.69.613 1.235.613.393 0 .716-.119.967-.355.25-.238.383-.549.396-.934h-1.27v-.914h2.399z"
          />
        </g>
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#000"
            d="M8.25 11.25h19.5l3 19.5H5.25l3-19.5zm12.75-3a3.001 3.001 0 01-6 0 3 3 0 016 0z"
          />
          <path
            fill="#000"
            d="M17.751 18.016l-3.357 3.387 3.673 5.18h-2.36l-2.602-3.845-1.078 1.078v2.766h-1.869v-8.566h1.869v3.544l3.357-3.544h2.367zm8.191 3.949v4.617h-1.195l-.188-.978c-.633.787-1.486 1.183-2.56 1.183-1.308 0-2.342-.483-3.1-1.453-.628-.809-.943-1.808-.943-2.994 0-1.347.41-2.451 1.23-3.31.77-.814 1.764-1.22 2.982-1.22 1.125 0 2.042.364 2.748 1.09.528.548.831 1.191.91 1.934h-1.811c-.095-.462-.303-.82-.63-1.079-.327-.258-.74-.385-1.24-.385-.757 0-1.343.292-1.757.877-.363.512-.545 1.203-.545 2.075 0 .852.17 1.527.509 2.028.418.612 1.036.92 1.852.92.59 0 1.074-.18 1.45-.533.377-.357.575-.824.595-1.401h-1.904v-1.371h3.597z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWeightComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconWeightComponent],
  exports: [IconWeightComponent],
})
export class IconWeightModule {}
