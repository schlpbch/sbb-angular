import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-tickets-class',
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
            fill="#000"
            d="M17.975 4.931v4.07h-.812V6.335h-.959v-.59c.2-.005.36-.025.487-.06a1.03 1.03 0 00.344-.173c.15-.116.25-.31.302-.582h.638zm-5.985 5.345V11H9.059c0-.22.036-.432.108-.632.07-.2.172-.373.302-.518.1-.11.217-.22.352-.325.134-.106.402-.3.802-.582.195-.136.332-.262.409-.379a.707.707 0 00.118-.406.604.604 0 00-.158-.433.544.544 0 00-.413-.165c-.42 0-.635.301-.65.904h-.78v-.089c0-.494.138-.876.414-1.146.269-.264.617-.396 1.044-.396.379 0 .695.108.949.323.276.234.414.548.414.944 0 .344-.11.641-.331.89-.072.082-.14.147-.203.196-.063.05-.23.168-.498.355a7.922 7.922 0 00-.55.41c-.11.094-.212.202-.307.325h1.909z"
          />
          <path
            stroke="#000"
            d="M10.5 5.5v-2h9v15h-6v-13h-9v15h9v-2m-7.5-5h6m-6 2h6m1.5-2H18m-4.5-2H18"
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
            fill="#000"
            d="M26.962 7.397v6.104h-1.218V9.505h-1.439V8.62c.3-.008.542-.038.73-.092.188-.052.36-.14.517-.258.225-.174.376-.465.453-.873h.957zm-8.977 8.017V16.5h-4.397c0-.331.054-.648.162-.948.107-.3.258-.56.453-.777.15-.166.326-.33.528-.487.201-.16.603-.45 1.203-.873.293-.204.498-.393.614-.569a1.06 1.06 0 00.177-.609c0-.267-.08-.483-.237-.65a.816.816 0 00-.62-.247c-.63 0-.952.452-.973 1.356h-1.172v-.133c0-.741.207-1.314.621-1.72.404-.395.926-.593 1.566-.593.569 0 1.043.162 1.424.484.414.351.62.822.62 1.416 0 .516-.164.962-.496 1.335-.108.123-.21.22-.304.294-.095.074-.344.252-.747.533-.384.267-.659.472-.825.613a3.337 3.337 0 00-.461.49h2.864z"
          />
          <path
            stroke="#000"
            d="M15.75 8.25v-3h13.5v22.5h-9V8.25H6.75v22.5h13.5v-3M9 20.25h9m-9 3h9m2.25-3H27m-6.75-3H27"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTicketsClassComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconTicketsClassComponent],
  exports: [IconTicketsClassComponent],
})
export class IconTicketsClassModule {}
