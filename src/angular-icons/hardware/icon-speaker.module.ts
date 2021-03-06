import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-speaker',
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
          d="M13.5 6.067v11.865l-5.319-4.438H4.5v-3h3.681L13.5 6.068zM18.273 17.9l-2.267-1.4m2.267-10.402L16.006 7.5m3.598 1.609L16.006 10m0 3.999l3.597.893M20 12h-3.993"
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
          d="M20.25 9.1v17.797l-7.979-6.657H6.75v-4.498h5.521L20.25 9.1zm7.159 17.752l-3.4-2.102m3.4-15.601l-3.4 2.101m5.396 2.413L24.01 15m0 5.999l5.394 1.34M30 18h-5.99"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSpeakerComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSpeakerComponent],
  exports: [IconSpeakerComponent],
})
export class IconSpeakerModule {}
