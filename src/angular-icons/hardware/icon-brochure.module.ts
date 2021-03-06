import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-brochure',
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
        <path
          fill="none"
          stroke="#000"
          d="M13 9l6-2m-6 5l6-2m-6 5l6-2m-6 5l6-2M4 7l6 2m-6 1l6 2m-6 1l6 2m-6 1l6 2m1.5-11.5l9-3v15l-9 3-9-3v-15l9 3zm0 15v-15"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M19.5 13.5l9-3m-9 7.5l9-3m-9 7.5l9-3m-9 7.5l9-3M6 10.5l9 3M6 15l9 3m-9 1.5l9 3M6 24l9 3m2.25-17.25l13.5-4.5v22.5l-13.5 4.5-13.5-4.5V5.25l13.5 4.5zm0 22.5V9.75"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBrochureComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconBrochureComponent],
  exports: [IconBrochureComponent],
})
export class IconBrochureModule {}
