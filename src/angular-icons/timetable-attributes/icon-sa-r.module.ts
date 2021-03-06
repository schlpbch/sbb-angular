import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-r',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11 16"
    >
      <path
        fill-rule="evenodd"
        d="M8.266 9.663c-.189-.546-.388-.94-.595-1.181-.204-.241-.515-.41-.928-.506 1.795-.37 2.693-1.488 2.693-3.354 0-1.16-.358-2.051-1.072-2.681C7.647 1.312 6.632 1 5.314 1H1v14h2.526V8.965h.607c.97 0 1.602.491 1.901 1.468L7.422 15H10.1L8.266 9.663zM4.574 6.937H3.526V2.81h1.08c.8 0 1.367.15 1.703.448.337.298.507.808.507 1.533 0 .673-.196 1.201-.584 1.58-.39.378-.945.567-1.658.567z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaRComponent extends IconBase {
  constructor() {
    super({ width: '11px', height: '16px', ratio: 0.6875 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaRComponent],
  exports: [IconSaRComponent],
})
export class IconSaRModule {}
