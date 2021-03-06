import { NgModule } from '@angular/core';

import { IconFastForwardModule } from './icon-fast-forward.module';
import { IconNextModule } from './icon-next.module';
import { IconPauseModule } from './icon-pause.module';
import { IconPlayModule } from './icon-play.module';
import { IconPreviousModule } from './icon-previous.module';
import { IconRecordModule } from './icon-record.module';
import { IconRewindModule } from './icon-rewind.module';
import { IconStopModule } from './icon-stop.module';

const modules = [
  IconFastForwardModule,
  IconNextModule,
  IconPauseModule,
  IconPlayModule,
  IconPreviousModule,
  IconRecordModule,
  IconRewindModule,
  IconStopModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class IconCollectionAudioModule {}
