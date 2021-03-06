import { NgModule } from '@angular/core';

import { IconAirplaneModule } from './icon-airplane.module';
import { IconBicycleModule } from './icon-bicycle.module';
import { IconBusCircleModule } from './icon-bus-circle.module';
import { IconBusSbbModule } from './icon-bus-sbb.module';
import { IconBusStopModule } from './icon-bus-stop.module';
import { IconBusModule } from './icon-bus.module';
import { IconCarParkingModule } from './icon-car-parking.module';
import { IconCarModule } from './icon-car.module';
import { IconChargingStationModule } from './icon-charging-station.module';
import { IconCombinedMobilityModule } from './icon-combined-mobility.module';
import { IconContainerModule } from './icon-container.module';
import { IconDriverlessBusModule } from './icon-driverless-bus.module';
import { IconFreightWagonModule } from './icon-freight-wagon.module';
import { IconKRModule } from './icon-k-r.module';
import { IconParkAndRailModule } from './icon-park-and-rail.module';
import { IconPetrolStationModule } from './icon-petrol-station.module';
import { IconShuttleModule } from './icon-shuttle.module';
import { IconTaxiModule } from './icon-taxi.module';
import { IconTrainModule } from './icon-train.module';
import { IconTramModule } from './icon-tram.module';

const modules = [
  IconBicycleModule,
  IconTrainModule,
  IconAirplaneModule,
  IconBusModule,
  IconBusCircleModule,
  IconBusSbbModule,
  IconBusStopModule,
  IconCarModule,
  IconCarParkingModule,
  IconChargingStationModule,
  IconCombinedMobilityModule,
  IconContainerModule,
  IconDriverlessBusModule,
  IconFreightWagonModule,
  IconKRModule,
  IconParkAndRailModule,
  IconPetrolStationModule,
  IconShuttleModule,
  IconTaxiModule,
  IconTramModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class IconCollectionTransportModule {}
