import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from '@sbb-esta/angular-public/checkbox';
import { FieldModule } from '@sbb-esta/angular-public/field';
import { TimeInputModule } from '@sbb-esta/angular-public/time-input';

import { provideExamples } from '../../../shared/example-provider';

import { TimeInputExampleComponent } from './time-input-example/time-input-example.component';
import { TimeInputFormExampleComponent } from './time-input-form-example/time-input-form-example.component';

const EXAMPLES = [TimeInputExampleComponent, TimeInputFormExampleComponent];

const EXAMPLE_INDEX = {
  'time-input-example': TimeInputExampleComponent,
  'time-input-form-example': TimeInputFormExampleComponent,
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    FieldModule,
    TimeInputModule,
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES,
  providers: [provideExamples('public', 'time-input', EXAMPLE_INDEX)],
})
export class TimeInputExamplesModule {}
