import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { DatabaseModule } from '../../common/database/database.module';
import { teamProviders } from './team.providers';
import { TeamController } from './team.controller';

@Module({
  modules: [DatabaseModule],
  components: [
    ...teamProviders,
    TeamService,
  ],
  controllers: [TeamController]
})
export class TeamModule { }
