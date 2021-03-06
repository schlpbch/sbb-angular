import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-user-group-round-table',
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
          d="M20.5 16.5c0 1.657-4.029 3-9 3s-9-1.343-9-3 4.029-3 9-3 9 1.343 9 3zm-7-8.5c0 1.381-.896 2.5-2 2.5s-2-1.119-2-2.5.896-2.5 2-2.5 2 1.119 2 2.5zm0 0c0 1.381-.896 2.5-2 2.5s-2-1.119-2-2.5.896-2.5 2-2.5 2 1.119 2 2.5zm5 1c0 1.381-.896 2.5-2 2.5s-2-1.119-2-2.5.896-2.5 2-2.5 2 1.119 2 2.5zm-10 0c0 1.381-.896 2.5-2 2.5s-2-1.119-2-2.5.896-2.5 2-2.5 2 1.119 2 2.5zm5.963 4.67c-.13-1.663-.8-3.05-1.722-3.724m-2.482 0c-.922.675-1.592 2.061-1.722 3.724m1.722-3.724c-.922.675-1.592 2.061-1.722 3.724m.264-1.443c-.285-.543-.646-.985-1.056-1.286m-2.49.002c-1.007.734-1.716 2.32-1.748 4.18m15.987.003c-.03-1.862-.738-3.451-1.748-4.185m-2.492 0c-.412.299-.771.74-1.056 1.285"
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
          d="M30.75 24.75c0 2.485-6.044 4.5-13.5 4.5-7.457 0-13.5-2.015-13.5-4.5s6.043-4.5 13.5-4.5c7.456 0 13.5 2.015 13.5 4.5zM20.25 12c0 2.072-1.344 3.75-3 3.75s-3-1.678-3-3.75 1.344-3.75 3-3.75 3 1.678 3 3.75zm0 0c0 2.072-1.344 3.75-3 3.75s-3-1.678-3-3.75 1.344-3.75 3-3.75 3 1.678 3 3.75zm7.5 1.5c0 2.072-1.344 3.75-3 3.75s-3-1.678-3-3.75 1.344-3.75 3-3.75 3 1.678 3 3.75zm-15 0c0 2.072-1.344 3.75-3 3.75s-3-1.678-3-3.75 1.344-3.75 3-3.75 3 1.678 3 3.75zm8.944 7.005c-.193-2.495-1.2-4.574-2.583-5.586m-3.723 0c-1.383 1.013-2.388 3.092-2.583 5.586m2.583-5.586c-1.383 1.013-2.388 3.092-2.583 5.586m.397-2.164c-.428-.816-.969-1.477-1.584-1.929m-3.735.002c-1.51 1.101-2.574 3.48-2.622 6.272m23.98.003c-.046-2.793-1.107-5.177-2.622-6.277m-3.738 0c-.618.448-1.157 1.11-1.584 1.927"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUserGroupRoundTableComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconUserGroupRoundTableComponent],
  exports: [IconUserGroupRoundTableComponent],
})
export class IconUserGroupRoundTableModule {}
