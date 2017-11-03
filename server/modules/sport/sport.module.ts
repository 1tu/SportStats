import { Module } from '@nestjs/common';
import { SportService } from './sport.service';
import { DatabaseModule } from '../../common/database/database.module';
import { sportProviders } from './sport.providers';
import { SportController } from './sport.controller';

@Module({
  modules: [DatabaseModule],
  components: [
    ...sportProviders,
    SportService,
  ],
  controllers: [SportController]
})
export class SportModule { }
