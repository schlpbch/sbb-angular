import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-train-signal',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <g fill="none" fill-rule="evenodd">
        <path
          stroke="#000"
          d="M19 4.5L15.5 8v25l3.5 3.5h10l3.5-3.5V8L29 4.5H19zm1 30h8l2.5-2.5V9L28 6.5h-8L17.5 9v23l2.5 2.5zm6.5-6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm0-8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm0-8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-4 24.5v6.494V36.5zm3 0v6.494V36.5zm9.5-17h2-2zM13 16l-2-2 2 2zm22 0l2-2-2 2zm-22 3.5h-2 2zm0 3.5l-2 2 2-2zm22 0l2 2-2-2zm-25-3.5H9h1zm28 0h1-1z"
        />
        <path fill="#000" d="M26.5 20a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTrainSignalComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconTrainSignalComponent],
  exports: [IconTrainSignalComponent],
})
export class IconTrainSignalModule {}
