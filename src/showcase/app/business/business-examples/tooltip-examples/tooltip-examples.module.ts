import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@sbb-esta/angular-business/button';
import { FieldModule } from '@sbb-esta/angular-business/field';
import { TooltipModule } from '@sbb-esta/angular-business/tooltip';
import { IconPlusModule } from '@sbb-esta/angular-icons/navigation';

import { provideExamples } from '../../../shared/example-provider';

import { TooltipCustomContentExampleComponent } from './tooltip-custom-content-example/tooltip-custom-content-example.component';
import { TooltipCustomIconExampleComponent } from './tooltip-custom-icon-example/tooltip-custom-icon-example.component';
import { TooltipHoverExampleComponent } from './tooltip-hover-example/tooltip-hover-example.component';
import { TooltipSimpleExampleComponent } from './tooltip-simple-example/tooltip-simple-example.component';

const EXAMPLES = [
  TooltipCustomContentExampleComponent,
  TooltipCustomIconExampleComponent,
  TooltipHoverExampleComponent,
  TooltipSimpleExampleComponent,
];

const EXAMPLE_INDEX = {
  'tooltip-simple-example': TooltipSimpleExampleComponent,
  'tooltip-custom-content-example': TooltipCustomContentExampleComponent,
  'tooltip-custom-icon-example': TooltipCustomIconExampleComponent,
  'tooltip-hover-example': TooltipHoverExampleComponent,
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    FieldModule,
    TooltipModule,
    IconPlusModule,
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES,
  providers: [provideExamples('business', 'tooltip', EXAMPLE_INDEX)],
})
export class TooltipExamplesModule {}
