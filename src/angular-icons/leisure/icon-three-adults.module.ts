import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-three-adults',
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
        d="M35.5 10.5a2 2 0 11-.001 4.001A2 2 0 0135.5 10.5zm-2 27v2.499V37.5zm4 0v2.499V37.5zm-7-8l2-12h6l2 12m-1 8l-1-9.999h-6l-1 9.999h8zm-16-27a2 2 0 11-.001 4.001A2 2 0 0123.5 10.5zm-2 17.001v12.498-12.498zm4.001 0v12.498-12.498zM19.5 29.5v-12h8v12m-8-1.999h8-8zm-7-17.001a2 2 0 11-.001 4.001A2 2 0 0112.5 10.5zm-2 17.001v12.498-12.498zm4 0v12.498-12.498zm-6 1.999v-12h8v12m-8-1.999h8"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconThreeAdultsComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconThreeAdultsComponent],
  exports: [IconThreeAdultsComponent],
})
export class IconThreeAdultsModule {}
