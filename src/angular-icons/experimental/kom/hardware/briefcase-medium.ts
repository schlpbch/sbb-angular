/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconBriefcaseMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M28.456 30.375H6.045A2.295 2.295 0 013.75 28.08V12.045A2.295 2.295 0 016.045 9.75h22.411a2.294 2.294 0 012.294 2.295V28.08a2.293 2.293 0 01-2.294 2.294zM12.75 9.75v-.706a2.3 2.3 0 012.306-2.294h4.389a2.3 2.3 0 012.305 2.294v.706m-18 7.5h27m-11.65 3H15.4a1.15 1.15 0 01-1.15-1.15v-3.7c0-.636.515-1.15 1.15-1.15H19.1a1.15 1.15 0 011.149 1.15v3.7a1.15 1.15 0 01-1.15 1.15z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconBriefcaseMedium {}

@Component({
  selector: 'sbb-icon-briefcase-medium',
  template: ` <svg sbbIconBriefcaseMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBriefcaseMedium {}

@NgModule({
  declarations: [SvgIconBriefcaseMedium, IconBriefcaseMedium],
  exports: [SvgIconBriefcaseMedium, IconBriefcaseMedium],
})
export class IconBriefcaseMediumModule {}
