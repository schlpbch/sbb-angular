import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-hourglass',
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
          d="M18.516 20.5c0-2.82-1.926-5.266-3.979-6.504-.624-.384-1.053-1.135-1.053-1.996s.43-1.612 1.053-1.995c2.053-1.238 3.98-3.686 3.98-6.505H5.483c0 2.819 1.925 5.267 3.978 6.505.624.383 1.054 1.134 1.054 1.995 0 .86-.43 1.612-1.054 1.996C7.41 15.234 5.484 17.68 5.484 20.5h13.032zm-9.052-13c.33.307.683.577 1.04.793l.003.002c.656.404 1.155 1.091 1.492 1.836.336-.743.832-1.429 1.485-1.83a6.594 6.594 0 001.052-.8H9.464z"
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
          d="M27.774 30.75c0-4.229-2.889-7.9-5.968-9.756-.936-.576-1.58-1.703-1.58-2.994 0-1.292.644-2.418 1.58-2.993 3.08-1.857 5.968-5.529 5.968-9.757H8.226c0 4.228 2.888 7.9 5.967 9.757.936.575 1.581 1.701 1.581 2.993 0 1.291-.645 2.418-1.58 2.994-3.08 1.857-5.968 5.527-5.968 9.756h19.548zm-13.578-19.5a9.66 9.66 0 001.56 1.19l.004.003c.984.606 1.733 1.636 2.238 2.754.504-1.115 1.248-2.144 2.228-2.745a9.891 9.891 0 001.578-1.202h-7.608z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHourglassComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconHourglassComponent],
  exports: [IconHourglassComponent],
})
export class IconHourglassModule {}
