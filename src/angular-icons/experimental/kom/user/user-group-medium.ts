/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconUserGroupMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M20.476 17.618c3.78 2.17 5.46 5.706 5.775 10.133H9.75c.073-4.54 2.073-8.037 5.698-10.125m-1.154-2.808c.225 2.227 1.734 3.934 3.705 3.934 1.97 0 3.479-1.707 3.704-3.934m-1.409-4.135c-.627-.579-1.411-.934-2.295-.934-.885 0-1.669.355-2.296.934M24 6.75c-1.97 0-3.479 1.708-3.705 3.934.891.82 1.455 2.101 1.455 3.569 0 .193-.027.377-.045.565.627.579 1.412.934 2.295.934 2.137 0 3.75-1.999 3.75-4.5 0-2.502-1.613-4.502-3.75-4.502zm-2.295 8.069c.02-.188.045-.372.045-.566 0-1.467-.564-2.748-1.454-3.568m-4.591 0C15.48 8.456 13.97 6.748 12 6.748c-2.136 0-3.75 2-3.75 4.503 0 2.5 1.614 4.5 3.75 4.5.885 0 1.67-.356 2.296-.935-.02-.187-.046-.372-.046-.565 0-1.467.565-2.748 1.455-3.569zm0 0c-.89.82-1.455 2.1-1.455 3.568 0 .193.027.378.046.565m12.18-.2c3.78 2.17 5.46 5.707 5.775 10.133h-6.468m-15.67-.004H3.75c.075-4.54 2.073-8.037 5.7-10.125"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 36px;
        height: 36px;
      }
      :host-context(.sbb-icon-inherit-color) [fill]:not([fill='none']) {
        fill: currentColor;
      }
      :host-context(.sbb-icon-inherit-color) [stroke]:not([stroke='none']) {
        stroke: currentColor;
      }
    `,
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-user',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconUserGroupMedium {}

@Component({
  selector: 'sbb-icon-user-group-medium',
  template: ` <svg sbbIconUserGroupMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUserGroupMedium {}

@NgModule({
  declarations: [SvgIconUserGroupMedium, IconUserGroupMedium],
  exports: [SvgIconUserGroupMedium, IconUserGroupMedium],
})
export class IconUserGroupMediumModule {}
