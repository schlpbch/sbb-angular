import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from '@sbb-esta/angular-business/header';
import {
  SbbSidebarModule,
  SBB_ICON_SIDEBAR_EXPANDED_WIDTH,
} from '@sbb-esta/angular-business/sidebar';
import { IconStationModule } from '@sbb-esta/angular-icons/station';
import { CheckboxModule } from '@sbb-esta/angular-public/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HowToUpdateComponent } from './howtoupdate/how-to-update.component';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [AppComponent, IntroductionComponent, HowToUpdateComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ScrollingModule,
    HeaderModule,
    HttpClientModule,
    ReactiveFormsModule,
    CheckboxModule,
    SbbSidebarModule,
    IconStationModule,
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent],

  providers: [{ provide: SBB_ICON_SIDEBAR_EXPANDED_WIDTH, useValue: 260 }],
})
export class AppModule {}
