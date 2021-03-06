import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-database',
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
          d="M20.5 6c0 1.382-3.77 2.5-8.5 2.5S3.5 7.382 3.5 6 7.27 3.5 12 3.5s8.5 1.118 8.5 2.5zm-17 0v12c0 3.335 17 3.335 17 0V6m0 4c0 3.348-17 3.348-17 0m17 4.01c0 3.349-17 3.349-17 0"
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
          d="M30.75 9c0 2.073-5.655 3.75-12.75 3.75S5.25 11.073 5.25 9 10.905 5.25 18 5.25 30.75 6.927 30.75 9zM5.25 9v18c0 5.002 25.5 5.002 25.5 0V9m0 6c0 5.022-25.5 5.022-25.5 0m25.5 6.016c0 5.022-25.5 5.022-25.5 0"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDatabaseComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconDatabaseComponent],
  exports: [IconDatabaseComponent],
})
export class IconDatabaseModule {}
