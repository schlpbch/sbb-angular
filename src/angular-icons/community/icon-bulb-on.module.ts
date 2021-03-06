import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-bulb-on',
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
          d="M9.9 16c-1.4-.8-2.4-2.3-2.4-4 0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 1.7-1 3.3-2.4 4m.4 0v2.1l-2 .7v.7h-1v-.7l-2-.7V16h5zm1.445-10.95l-.702 1.288m3.6 1.613l-1.282.708M18.5 12l1.5.004m-2.445 3.348l1.299.694m-13.811-.009l1.31-.78M4 12h1.5m-.39-4.01l1.28.824m1.657-3.76l.71 1.289M12 4v1.5"
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
          d="M14.85 24c-2.1-1.2-3.6-3.45-3.6-6 0-3.75 3-6.75 6.75-6.75s6.75 3 6.75 6.75c0 2.55-1.5 4.95-3.6 6m.6 0v3.15l-3 1.05v1.05h-1.5V28.2l-3-1.05V24h7.5zm2.168-16.424l-1.053 1.93m5.4 2.42l-1.924 1.062M27.75 18l2.25.006m-3.668 5.023l1.949 1.04m-20.717-.013l1.965-1.17M6 18h2.25m-.585-6.015l1.921 1.236m2.485-5.64l1.064 1.933M18 6v2.25"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('large') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          stroke="#000"
          d="M19.3 32.5c-2.8-1.6-4.8-4.6-4.8-8 0-5 4-9 9-9s9 4 9 9c0 3.4-2 6.6-4.8 8m.8 0v6.2l-4 1.4v1.4h-2v-1.4l-4-1.4v-6.2h10zM27 26l-2.5 2v4.5M20 26l2.5 2v4.5m6 2H26m-7.5 2H21m7.5 0H26m-7.5-2H21m16-10l3 .008M7 24.5h3M23.5 8v3m11.69 6.751l2.602-1.494M9.207 32.751l2.598-1.5m18.441-18.44l1.506-2.595m3.44 21.035l2.594 1.506M9.212 16.251l2.598 1.5m3.443-7.539l1.5 2.598"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBulbOnComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconBulbOnComponent],
  exports: [IconBulbOnComponent],
})
export class IconBulbOnModule {}
