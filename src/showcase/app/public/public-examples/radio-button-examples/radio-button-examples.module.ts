import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from '@sbb-esta/angular-public/checkbox';
import { RadioButtonModule } from '@sbb-esta/angular-public/radio-button';

import { provideExamples } from '../../../shared/example-provider';

import { RadioButtonExampleComponent } from './radio-button-example/radio-button-example.component';
import { RadioButtonGroupHorizontalExampleComponent } from './radio-button-group-horizontal-example/radio-button-group-horizontal-example.component';
import { RadioButtonGroupReactiveFormsVerticalExampleComponent } from './radio-button-group-reactive-forms-vertical-example/radio-button-group-reactive-forms-vertical-example.component';

const EXAMPLES = [
  RadioButtonExampleComponent,
  RadioButtonGroupHorizontalExampleComponent,
  RadioButtonGroupReactiveFormsVerticalExampleComponent,
];

const EXAMPLE_INDEX = {
  'radio-button-group-reactive-forms-vertical-example': RadioButtonGroupReactiveFormsVerticalExampleComponent,
  'radio-button-group-horizontal-example': RadioButtonGroupHorizontalExampleComponent,
  'radio-button-example': RadioButtonExampleComponent,
};

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CheckboxModule, RadioButtonModule],
  declarations: EXAMPLES,
  exports: EXAMPLES,
  providers: [provideExamples('public', 'radio-button', EXAMPLE_INDEX)],
})
export class RadioButtonExamplesModule {}
