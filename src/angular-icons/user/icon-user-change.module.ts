import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-user-change',
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
          d="M4.918 6.535c-1.849.84-2.416 2.828-2.416 4.969h8.002c0-2.15-.577-4.136-2.418-4.976m7.825 9.994c-1.606.953-2.409 2.988-2.409 4.981h8.002c0-2.003-.81-4.032-2.415-4.98M17.5 12.5c1.147 0 2 1.162 2 2.5 0 .563-.151 1.095-.411 1.522-.359.588-.925.978-1.589.978-.664 0-1.23-.39-1.589-.978A2.943 2.943 0 0115.5 15c0-1.338.853-2.5 2-2.5zM4 16.138l2.5-2.47L9 16.132m11-8.297l-2.506 2.471L15 7.841m2.494 2.465c.39-4.894-2.114-7.802-5.502-7.791M6.5 2.5c1.147 0 2 1.162 2 2.5 0 .478-.108.933-.3 1.321-.346.7-.962 1.18-1.7 1.18-.737 0-1.354-.48-1.7-1.178A2.982 2.982 0 014.5 5c0-1.338.853-2.5 2-2.5zm0 11.169c-.388 4.894 2.114 7.845 5.502 7.833"
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
          d="M7.376 9.802c-2.772 1.262-3.622 4.242-3.622 7.454h12.001c0-3.225-.865-6.204-3.627-7.464m11.739 14.991c-2.41 1.43-3.614 4.482-3.614 7.472h12.003c0-3.005-1.215-6.048-3.622-7.472M26.25 18.75c1.72 0 3 1.743 3 3.75 0 .845-.227 1.643-.616 2.283-.539.882-1.388 1.467-2.384 1.467s-1.845-.585-2.384-1.467a4.415 4.415 0 01-.616-2.283c0-2.007 1.28-3.75 3-3.75zM6 24.208l3.75-3.705 3.75 3.696M30 11.753l-3.759 3.706-3.741-3.697m3.741 3.697c.584-7.341-3.17-11.703-8.253-11.687M9.75 3.75c1.72 0 3 1.743 3 3.75 0 .717-.162 1.4-.45 1.982-.519 1.048-1.443 1.768-2.55 1.768-1.105 0-2.031-.718-2.55-1.765A4.472 4.472 0 016.75 7.5c0-2.007 1.28-3.75 3-3.75zm0 16.753c-.582 7.341 3.171 11.768 8.253 11.75"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconUserChangeComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconUserChangeComponent],
  exports: [IconUserChangeComponent]
})
export class IconUserChangeModule {}