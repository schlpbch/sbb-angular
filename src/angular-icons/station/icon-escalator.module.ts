import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-escalator',
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
          d="M9.498 5.5a1 1 0 11-2.001 0 1 1 0 012 0zM19 5.5h-3c-.721 0-1.406.311-1.881.854L7.865 13.5H5A2.503 2.503 0 002.5 16c0 1.378 1.122 2.5 2.5 2.5h4c.721 0 1.407-.31 1.881-.854l6.253-7.146H19c1.379 0 2.5-1.122 2.5-2.5S20.379 5.5 19 5.5zm-11.502 8v-5h2v3.134"
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
          d="M14.246 8.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm14.254 0H24a3.747 3.747 0 00-2.822 1.281l-9.38 10.72H7.5A3.754 3.754 0 003.75 24a3.755 3.755 0 003.75 3.75h6c1.082 0 2.11-.467 2.822-1.282L25.7 15.75H28.5A3.754 3.754 0 0032.25 12a3.754 3.754 0 00-3.75-3.75zm-17.253 12v-7.5h3v4.7"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEscalatorComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconEscalatorComponent],
  exports: [IconEscalatorComponent],
})
export class IconEscalatorModule {}
