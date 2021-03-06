import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-shirt-shoe',
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
          d="M12.645 17.084v4.5h-1.5s-1.153-4.5 0-9h4.5s.593 2.395 2.067 4.556c1.477 2.16 3.785 1.703 3.933 4.444h-4c-.595 0-1.587.03-3-2.5-1.484-2.72-4-2.503-4-2.503m6.5-5.497v-1.5l2.5 1 2-4-6-4s-1.836 1-3.5 1c-1.663 0-3.5-1-3.5-1l-6 4 2 4 2.5-1 .5 10h1.5"
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
          d="M18.967 25.625v6.75h-2.25s-1.73-6.75 0-13.5h6.75s.89 3.593 3.102 6.834c2.214 3.242 5.677 2.555 5.898 6.666h-6c-.891 0-2.38.045-4.5-3.75-2.226-4.078-6-3.754-6-3.754m9.75-8.246v-2.25l3.75 1.5 3-6-9-6s-2.754 1.5-5.25 1.5c-2.495 0-5.25-1.5-5.25-1.5l-9 6 3 6 3.75-1.5.75 15h2.25"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconShirtShoeComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconShirtShoeComponent],
  exports: [IconShirtShoeComponent],
})
export class IconShirtShoeModule {}
