import { NgModule } from '@angular/core';

import { IconArrowCompassModule } from './icon-arrow-compass.module';
import { IconGpsDisabledModule } from './icon-gps-disabled.module';
import { IconGpsModule } from './icon-gps.module';
import { IconLocationPinAModule } from './icon-location-pin-a.module';
import { IconLocationPinBModule } from './icon-location-pin-b.module';
import { IconLocationPinMapModule } from './icon-location-pin-map.module';
import { IconLocationPinPulseSurroundingAreaModule } from './icon-location-pin-pulse-surrounding-area.module';
import { IconLocationPinSurroundingAreaModule } from './icon-location-pin-surrounding-area.module';
import { IconLocationPinModule } from './icon-location-pin.module';
import { IconMountainMinusModule } from './icon-mountain-minus.module';
import { IconMountainPlusModule } from './icon-mountain-plus.module';

const modules = [
  IconArrowCompassModule,
  IconGpsModule,
  IconGpsDisabledModule,
  IconLocationPinModule,
  IconLocationPinAModule,
  IconLocationPinBModule,
  IconLocationPinMapModule,
  IconLocationPinPulseSurroundingAreaModule,
  IconLocationPinSurroundingAreaModule,
  IconMountainMinusModule,
  IconMountainPlusModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class IconCollectionLocationModule {}
