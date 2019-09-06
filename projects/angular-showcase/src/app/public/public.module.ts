import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsModule } from '@sbb-esta/angular-public';

import { SharedModule } from '../shared/shared.module';

import { ComponentViewerComponent } from './component-viewer/component-viewer.component';
import { ExamplesModule } from './examples/examples.module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public/public.component';

@NgModule({
  declarations: [PublicComponent, ComponentViewerComponent],
  imports: [
    CommonModule,
    PortalModule,
    ExamplesModule,
    SharedModule,
    TabsModule,
    PublicRoutingModule
  ]
})
export class PublicModule {}