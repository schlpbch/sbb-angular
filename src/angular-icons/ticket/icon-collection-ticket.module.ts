import { NgModule } from '@angular/core';

import { IconQrcodeDisabledModule } from './icon-qrcode-disabled.module';
import { IconQrcodeModule } from './icon-qrcode.module';
import { IconSwisspassTemporaryModule } from './icon-swisspass-temporary.module';
import { IconSwisspassModule } from './icon-swisspass.module';
import { IconTicketDayModule } from './icon-ticket-day.module';
import { IconTicketDisabledModule } from './icon-ticket-disabled.module';
import { IconTicketHeartModule } from './icon-ticket-heart.module';
import { IconTicketJourneyModule } from './icon-ticket-journey.module';
import { IconTicketParkingModule } from './icon-ticket-parking.module';
import { IconTicketPercentModule } from './icon-ticket-percent.module';
import { IconTicketRouteModule } from './icon-ticket-route.module';
import { IconTicketStarModule } from './icon-ticket-star.module';
import { IconTicketsClassModule } from './icon-tickets-class.module';

const modules = [
  IconQrcodeModule,
  IconQrcodeDisabledModule,
  IconSwisspassModule,
  IconSwisspassTemporaryModule,
  IconTicketsClassModule,
  IconTicketDayModule,
  IconTicketDisabledModule,
  IconTicketHeartModule,
  IconTicketJourneyModule,
  IconTicketParkingModule,
  IconTicketPercentModule,
  IconTicketRouteModule,
  IconTicketStarModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class IconCollectionTicketModule {}
