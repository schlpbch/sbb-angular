import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-thumb-down',
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
          d="M16 11.508h1.5m-12.001 2H8.5V5.5H5.499v8.008zm10.501-4h1.5m-1.5-2h.5m1 6a1 1 0 100-2 1 1 0 100-2 1 1 0 100-2h-1a1 1 0 000-2h-5c-1.508 0-3 .5-3 3v5h1l4.29 4.704a.998.998 0 001.71-.703.985.985 0 00-.062-.349L14 13.508h3.5"
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
          d="M24 17.262h2.25m-18.002 3h4.502V8.25H8.248v12.012zm15.752-6h2.25m-2.25-3h.75m1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 100-3 1.5 1.5 0 100-3h-1.5a1.5 1.5 0 000-3h-7.5c-2.262 0-4.5.75-4.5 4.5v7.5h1.5l6.435 7.057a1.5 1.5 0 002.472-1.578L21 20.263h5.25"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconThumbDownComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconThumbDownComponent],
  exports: [IconThumbDownComponent],
})
export class IconThumbDownModule {}
