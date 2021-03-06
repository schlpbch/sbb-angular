import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-meeting-point',
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
          d="M14.5 12.5c0 1.674-1.326 3-3 3s-3-1.326-3-3 1.326-3 3-3 3 1.326 3 3zM3 8.5h4.5V4m-4.25.25L7.5 8.5m8-4.5v4.5H20m-.25-4.25L15.5 8.5m4.5 8h-4.5V21m4.25-.25L15.5 16.5m-8 4.5v-4.5H3m.25 4.25L7.5 16.5"
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
          d="M21.75 18.75c0 2.511-1.989 4.5-4.5 4.5a4.467 4.467 0 01-4.5-4.5c0-2.51 1.989-4.5 4.5-4.5s4.5 1.99 4.5 4.5zm-17.25-6h6.75V6m-6.375.375l6.375 6.375m12-6.75v6.75H30m-.375-6.375L23.25 12.75m6.75 12h-6.75v6.75m6.375-.375L23.25 24.75m-12 6.75v-6.75H4.5m.375 6.375l6.375-6.375"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMeetingPointComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconMeetingPointComponent],
  exports: [IconMeetingPointComponent],
})
export class IconMeetingPointModule {}
