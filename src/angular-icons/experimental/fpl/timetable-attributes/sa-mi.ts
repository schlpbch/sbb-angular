/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaMi]',
  template: `
    <svg:path
      fill="#000"
      fill-rule="evenodd"
      d="M4.5 13.601v-4.5c-.928-.121-1.793-.464-2.344-1.01-.548-.546-.891-1.11-.985-1.676C1.056 5.848 1 5.424 1 5.122V1h8.4v4.122c0 .261-.057.686-.153 1.272-.113.588-.452 1.152-1.003 1.698-.55.545-1.413.888-2.344 1.01V13.6l3.499.001V15H1v-1.399h3.5z"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 10px;
        height: 16px;
      }
      :host-context(.sbb-icon-inherit-color) [fill]:not([fill='none']) {
        fill: currentColor;
      }
      :host-context(.sbb-icon-inherit-color) [stroke]:not([stroke='none']) {
        stroke: currentColor;
      }
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 10 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconSaMi {}

@Component({
  selector: 'sbb-icon-sa-mi',
  template: `
    <svg sbbIconSaMi></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSaMi {}

@NgModule({
  declarations: [SvgIconSaMi, IconSaMi],
  exports: [SvgIconSaMi, IconSaMi]
})
export class IconSaMiModule {}