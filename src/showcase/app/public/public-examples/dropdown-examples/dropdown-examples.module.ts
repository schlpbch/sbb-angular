import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconUserModule } from '@sbb-esta/angular-icons/user';
import { DropdownModule } from '@sbb-esta/angular-public/dropdown';

import { DropdownExampleComponent } from './dropdown-example/dropdown-example.component';

const EXAMPLES = [DropdownExampleComponent];

@NgModule({
  imports: [CommonModule, RouterModule, IconUserModule, DropdownModule],
  declarations: EXAMPLES,
  exports: EXAMPLES
})
export class DropdownExamplesModule {}