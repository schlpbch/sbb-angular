import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-locker',
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
          d="M6.5 4.5a2 2 0 10-4 0 2 2 0 004 0zm-.268-1H11.5l.984.984L11.469 5.5H6.232M2.5 21.5h19v-13h-19v13zm15-9h-11a1 1 0 00-1 1v4a1 1 0 001 1h11a1 1 0 001-1v-4a1 1 0 00-1-1zm-7.5-1h4"
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
          d="M9.75 6.75a3 3 0 10-6 0 3 3 0 006 0zm-.402-1.5h7.902l1.476 1.476-1.523 1.524H9.348m-5.598 24h28.5v-19.5H3.75v19.5zm22.5-13.499H9.75a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5zM15 17.251h6"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLockerComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconLockerComponent],
  exports: [IconLockerComponent],
})
export class IconLockerModule {}
