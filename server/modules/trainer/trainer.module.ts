import { Module } from '@nestjs/common';
import { TrainerService } from './trainer.service';
import { DatabaseModule } from '../../common/database/database.module';
import { trainerProviders } from './trainer.providers';
import { TrainerController } from './trainer.controller';

@Module({
  modules: [DatabaseModule],
  components: [
    ...trainerProviders,
    TrainerService,
  ],
  controllers: [TrainerController]
})
export class TrainerModule { }
