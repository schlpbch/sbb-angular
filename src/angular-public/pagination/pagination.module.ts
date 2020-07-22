import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SbbIconModule } from '@sbb-esta/angular-core/icon';

import { NavigationComponent } from './navigation/navigation.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SbbPaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [PaginationComponent, NavigationComponent, SbbPaginatorComponent],
  imports: [CommonModule, RouterModule, SbbIconModule],
  exports: [PaginationComponent, NavigationComponent, SbbPaginatorComponent],
})
export class PaginationModule {}
