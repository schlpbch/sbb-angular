import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SBB_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@sbb-esta/angular-core/base/tooltip';
import { IconDirectiveModule } from '@sbb-esta/angular-core/icon-directive';
import { IconCrossModule } from '@sbb-esta/angular-icons/navigation';
import { IconQuestionMarkModule } from '@sbb-esta/angular-icons/status';

import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [TooltipComponent],
  imports: [
    CommonModule,
    PortalModule,
    OverlayModule,
    IconQuestionMarkModule,
    IconCrossModule,
    IconDirectiveModule,
  ],
  providers: [SBB_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
  exports: [TooltipComponent, IconDirectiveModule],
})
export class TooltipModule {}
