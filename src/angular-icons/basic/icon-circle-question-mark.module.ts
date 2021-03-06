import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-circle-question-mark',
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
            d="M20.5 12c0 4.712-3.787 8.5-8.5 8.5A8.477 8.477 0 013.5 12c0-4.713 3.787-8.5 8.5-8.5s8.5 3.787 8.5 8.5z"
          />
          <path
            fill="#000"
            d="M11.124 17.991v-1.666h1.73v1.666h-1.73zM8.393 9.886c.037-.992.232-1.761.585-2.306a3.282 3.282 0 011.297-1.161c.539-.272 1.145-.408 1.818-.408 1.083 0 1.945.307 2.586.921.597.566.897 1.31.897 2.234 0 .763-.203 1.42-.609 1.97-.181.251-.616.712-1.305 1.385-.305.294-.516.538-.637.733-.12.195-.204.436-.252.725-.053.288-.08.661-.08 1.121h-1.361c.011-.817.083-1.423.216-1.818.096-.289.234-.547.412-.777.179-.229.576-.659 1.189-1.289.396-.406.655-.771.777-1.097a2.47 2.47 0 00.152-.849c0-.534-.146-.982-.44-1.345-.353-.443-.873-.665-1.561-.665-1.426 0-2.195.875-2.306 2.626H8.393z"
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
            d="M30.75 18c0 7.068-5.68 12.75-12.75 12.75S5.25 25.068 5.25 18c0-7.07 5.68-12.75 12.75-12.75S30.75 10.93 30.75 18z"
          />
          <path
            fill="#000"
            d="M16.686 26.986v-2.498h2.595v2.498h-2.595zM12.589 14.83c.056-1.488.348-2.642.878-3.459a4.923 4.923 0 011.945-1.741c.809-.409 1.718-.612 2.728-.612 1.624 0 2.917.46 3.878 1.381.896.849 1.346 1.965 1.346 3.351 0 1.144-.305 2.13-.913 2.955-.272.377-.925 1.068-1.958 2.078-.457.44-.774.806-.955 1.099-.18.293-.306.654-.378 1.087-.08.433-.12.992-.12 1.682h-2.042c.017-1.226.124-2.134.324-2.727.144-.433.351-.82.618-1.165.268-.344.864-.989 1.784-1.934.593-.609.982-1.157 1.165-1.646.152-.417.228-.841.228-1.273 0-.801-.219-1.473-.66-2.018-.53-.664-1.31-.997-2.341-.997-2.14 0-3.293 1.313-3.46 3.939H12.59z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCircleQuestionMarkComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconCircleQuestionMarkComponent],
  exports: [IconCircleQuestionMarkComponent],
})
export class IconCircleQuestionMarkModule {}
