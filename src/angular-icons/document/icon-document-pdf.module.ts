import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-document-pdf',
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
          <path stroke="#000" d="M6.509 4.5h5.99l5 5v10h-11l.01-15zm5.991 0v5h5" />
          <path
            fill="#000"
            d="M8.651 15.555v.85h.584c.174 0 .3-.032.375-.093.095-.076.142-.19.142-.339 0-.15-.055-.262-.164-.336-.079-.055-.208-.082-.388-.082h-.549zm-.654-.554h1.21c.203 0 .363.013.481.038a.942.942 0 01.317.134c.26.176.391.44.391.792 0 .314-.108.56-.324.738a.824.824 0 01-.314.165 1.582 1.582 0 01-.435.051h-.672V18h-.654v-2.998zm3.413.554v1.891h.504c.155 0 .278-.016.37-.046a.573.573 0 00.239-.158c.159-.17.238-.423.238-.756 0-.306-.073-.537-.22-.695-.147-.157-.364-.236-.652-.236h-.48zm-.654-.554h1.212c.225 0 .418.027.579.078.16.052.302.134.425.247.3.273.449.652.449 1.137 0 .515-.141.911-.424 1.192a1.069 1.069 0 01-.42.265 1.883 1.883 0 01-.595.08h-1.226V15zm5.226 0v.555h-1.456v.695h1.268v.515h-1.268V18h-.654v-2.998h2.11z"
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
          <path stroke="#000" d="M9.763 6.75h8.987l7.5 7.5v15H9.75l.013-22.5zm8.987 0v7.5h7.5" />
          <path
            fill="#000"
            d="M12.977 23.333v1.274h.876c.261 0 .449-.047.563-.138.142-.114.213-.285.213-.509 0-.225-.083-.393-.246-.504-.119-.082-.312-.123-.582-.123h-.824zm-.98-.83h1.814c.305 0 .545.019.722.056.174.04.333.107.475.201.39.264.587.66.587 1.188 0 .471-.162.84-.486 1.107a1.236 1.236 0 01-.471.248 2.373 2.373 0 01-.653.076h-1.008V27h-.98v-4.497zm5.118.83v2.837h.756c.232 0 .417-.024.555-.07a.859.859 0 00.358-.236c.239-.257.357-.635.357-1.134 0-.46-.11-.806-.33-1.043-.22-.235-.546-.354-.978-.354h-.718zm-.981-.83h1.818c.337 0 .627.04.868.116.242.078.453.201.638.37.45.41.673.979.673 1.706 0 .773-.211 1.367-.636 1.788-.186.186-.396.32-.63.398-.234.08-.532.118-.892.118h-1.84v-4.497zm7.84 0v.83H21.79v1.043h1.902v.773H21.79v1.85h-.981v-4.496h3.165z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDocumentPdfComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconDocumentPdfComponent],
  exports: [IconDocumentPdfComponent],
})
export class IconDocumentPdfModule {}
