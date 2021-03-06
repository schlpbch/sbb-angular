import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-torch',
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
          d="M12.5 20.5h-2l-1-5h4l-1 5zm-4-10v-3l3 1v-5c3.716 2.729 3 7 3 7-.147 1.65-1.343 3-3 3a3 3 0 01-3-3z"
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
          d="M18.75 30.75h-3l-1.5-7.5h6l-1.5 7.5zm-6-15v-4.5l4.5 1.5v-7.5c5.574 4.094 4.5 10.5 4.5 10.5-.22 2.475-2.015 4.5-4.5 4.5a4.5 4.5 0 01-4.5-4.5z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTorchComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconTorchComponent],
  exports: [IconTorchComponent],
})
export class IconTorchModule {}
