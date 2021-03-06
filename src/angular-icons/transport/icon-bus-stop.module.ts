import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-bus-stop',
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
          d="M7.499 4.5h14v-2h-14v2zm1.001.001v17.5m12.001-17.5v17.5M2.5 12.5h4v-5h-4v5zm2 0V22m12-13.5a1 1 0 11-2 0 1 1 0 012 0zm1 8v-5h-4v5h1v5h2v-5h1z"
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
          d="M11.248 6.75h21v-3h-21v3zm1.502.002v26.25m18.002-26.25v26.25M3.75 18.75h6v-7.5h-6v7.5zm3 0V33m18-20.25a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zm1.5 12v-7.5h-6v7.5h1.5v7.5h3v-7.5h1.5z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBusStopComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconBusStopComponent],
  exports: [IconBusStopComponent],
})
export class IconBusStopModule {}
