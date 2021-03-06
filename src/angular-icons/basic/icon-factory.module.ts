import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-factory',
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
          d="M2.5 7.5h3v6l5-4v4l5-4v4l5-4v11h-18v-13zm3 10h2v-1h-2v1zm5 0h2v-1h-2v1zm5 0h2v-1h-2v1zM7.01 2.891a1.495 1.495 0 00-2.453.718A1.5 1.5 0 002.5 5m8 0a1.496 1.496 0 00-2.942-.391A1.5 1.5 0 005.5 6"
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
          d="M3.75 11.25h4.5v9l7.5-6v6l7.5-6v6l7.5-6v16.5h-27v-19.5zm4.5 15h3v-1.5h-3v1.5zm7.5 0h3v-1.5h-3v1.5zm7.5 0h3v-1.5h-3v1.5zM10.515 4.337a2.242 2.242 0 00-3.679 1.077A2.249 2.249 0 003.75 7.5m12 0a2.244 2.244 0 00-4.413-.587A2.249 2.249 0 008.25 9"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFactoryComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconFactoryComponent],
  exports: [IconFactoryComponent],
})
export class IconFactoryModule {}
