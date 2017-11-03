import { Module } from '@nestjs/common';
import { SportsmanService } from './sportsman.service';
import { DatabaseModule } from '../../common/database/database.module';
import { sportsmanProviders } from './sportsman.providers';
import { SportsmanController } from './sportsman.controller';

@Module({
  modules: [DatabaseModule],
  components: [
    ...sportsmanProviders,
    SportsmanService,
  ],
  controllers: [SportsmanController]
})
export class SportsmanModule { }
