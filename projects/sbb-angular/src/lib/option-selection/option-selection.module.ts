import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from '../radio-button/radio-button.module';
import { OptionSelectionComponent } from './option-selection/option-selection.component';
import { OptionSelectionImageDirective } from './option-selection-image.directive';
import { OptionSelectionMultipleComponent } from './option-selection-multiple/option-selection-multiple.component';
import { CheckboxModule } from '../checkbox/checkbox.module';

@NgModule({

  imports: [
    CommonModule,
    RadioButtonModule,
    CheckboxModule
  ],
  declarations: [
    OptionSelectionComponent,
    OptionSelectionImageDirective,
    OptionSelectionMultipleComponent
  ],
  exports: [
    OptionSelectionComponent,
    OptionSelectionImageDirective,
    OptionSelectionMultipleComponent
  ]
})
export class OptionSelectionModule { }
