import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-avatar-police',
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
          d="M17.5 9.5h-12l-1-3 7-2 7 2-1 3zm-6 2.5c1.892 0 3.575-.976 4.75-2.5h-9.5C7.925 11.024 9.608 12 11.5 12zm-1.7 2a.3.3 0 11-.6 0 .3.3 0 01.6 0zm4 0a.3.3 0 11-.6 0 .3.3 0 01.6 0zM12 7a.5.5 0 11-1 0 .5.5 0 011 0zm2.052 9.552c-.528.569-1.474.948-2.552.948-1.013 0-1.91-.335-2.452-.848M5.48 11s.298 4.908 1 6c1.873 2.911 3.961 3.5 5.01 3.5 1.048 0 3.136-.589 5.01-3.5.701-1.092 1-6 1-6"
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
          d="M26.25 14.25h-18l-1.5-4.5 10.5-3 10.5 3-1.5 4.5zm-9 3.75c2.838 0 5.363-1.464 7.125-3.75h-14.25C11.887 16.536 14.412 18 17.25 18zm-2.55 3a.45.45 0 11-.9 0 .45.45 0 01.9 0zm6 0a.45.45 0 11-.9 0 .45.45 0 01.9 0zM18 10.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3.078 14.327c-.792.854-2.211 1.422-3.828 1.422-1.52 0-2.864-.502-3.678-1.27M8.222 16.5s.447 7.362 1.5 9c2.81 4.367 5.942 5.25 7.514 5.25 1.573 0 4.705-.883 7.515-5.25 1.053-1.638 1.5-9 1.5-9"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconAvatarPoliceComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconAvatarPoliceComponent],
  exports: [IconAvatarPoliceComponent],
})
export class IconAvatarPoliceModule {}
