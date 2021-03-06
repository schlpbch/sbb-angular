import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-switzerland',
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
          d="M13.337 5.976l-1.013 1.307L8.56 8.309l-.74-.4-2.44 1.813 1.103.379L3.58 13.32 2.5 17.274l2.14-.544.945-.55 2.237 2.141 3.157-.354 1.819-1.969 2.153 2.978 1.574-3.338 3.664.957-.232-2.003 1.543.039-.158-3.269-1.343-1.026-.436.827-1.776-.536.663-1.976-3.717-1.443z"
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
          d="M20.005 8.964l-1.519 1.96-5.646 1.539-1.11-.6-3.66 2.72 1.654.568L5.37 19.98l-1.62 5.931 3.21-.816 1.417-.825 3.356 3.211 4.735-.531 2.729-2.953 3.229 4.467 2.361-5.007 5.496 1.435-.348-3.004 2.315.058-.237-4.903-2.015-1.539-.654 1.24-2.664-.804.995-2.964-5.576-2.164z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSwitzerlandComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSwitzerlandComponent],
  exports: [IconSwitzerlandComponent],
})
export class IconSwitzerlandModule {}
