import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-avatar-train-staff',
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
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#000"
            d="M17.5 3.5c0 .552-2.687 1-6 1s-6-.448-6-1c0-.553 2.687-1 6-1s6 .447 6 1zM7.062 10.842c.303 1.217 2.164 2.159 4.438 2.159 2.274 0 4.135-.941 4.437-2.159M5.5 3.5v6c0 1.104 2.687 2 6 2s6-.896 6-2v-6m0 7.95L17.005 16s-.284 2.266-1.514 3.38c-1.387 1.258-2.463 2.087-3.991 2.087s-2.603-.83-3.991-2.086C6.279 18.266 5.995 16 5.995 16L5.5 11.45M14 17.5s-1.07 1-2.5 1-2.5-1-2.5-1"
          />
          <path
            fill="#000"
            d="M12.3 6h1.2l2 2-2 2h-1.2l1.6-1.5H12V10h-1V8.5H9.1l1.6 1.5H9.5l-2-2 2-2h1.2L9.1 7.5H11V6h1v1.5h1.9L12.3 6zm-2.1 9.2c0 .5-.3.8-.8.8s-.8-.4-.8-.8c0-.5.3-.8.8-.8s.8.4.8.8zm4 0c0 .5-.3.8-.8.8s-.8-.4-.8-.8c0-.5.3-.8.8-.8s.8.4.8.8z"
          />
        </g>
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#000"
            d="M26.25 5.25c0 .828-4.03 1.5-9 1.5s-9-.672-9-1.5c0-.83 4.03-1.5 9-1.5s9 .67 9 1.5zM10.593 16.264c.454 1.825 3.246 3.237 6.657 3.237s6.203-1.412 6.655-3.237M8.25 5.25v9c0 1.656 4.03 3 9 3s9-1.344 9-3v-9m0 11.925L25.508 24s-.427 3.399-2.271 5.071c-2.081 1.886-3.695 3.13-5.987 3.13-2.292 0-3.905-1.244-5.986-3.13C9.418 27.4 8.992 24 8.992 24l-.743-6.825M21 26.25s-1.605 1.5-3.75 1.5-3.75-1.5-3.75-1.5"
          />
          <path
            fill="#000"
            d="M18.45 9h1.8l3 3-3 3h-1.8l2.401-2.25H18V15h-1.5v-2.25h-2.85l2.4 2.25h-1.8l-3-3 3-3h1.8l-2.4 2.25h2.85V9H18v2.25h2.851L18.45 9zM14.9 22.8c0 .5-.3.8-.8.8s-.8-.4-.8-.8c0-.5.3-.8.8-.8s.8.4.8.8zm6 0c0 .5-.3.8-.8.8s-.8-.4-.8-.8c0-.5.3-.8.8-.8s.8.4.8.8z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconAvatarTrainStaffComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconAvatarTrainStaffComponent],
  exports: [IconAvatarTrainStaffComponent],
})
export class IconAvatarTrainStaffModule {}
