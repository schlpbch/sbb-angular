import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-browser',
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
          d="M2.5 20.5h19v-15h-19v15zm0-10h19M11.5 8a.5.5 0 11-1 0 .5.5 0 011 0zm-3 0a.5.5 0 11-1 0 .5.5 0 011 0zm-3 0a.5.5 0 11-1 0 .5.5 0 011 0z"
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
          d="M3.75 30.75h28.5V8.25H3.75v22.5zm0-15h28.5m-15-3.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-4.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-4.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBrowserComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconBrowserComponent],
  exports: [IconBrowserComponent],
})
export class IconBrowserModule {}
