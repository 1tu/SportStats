import { Module } from '@nestjs/common';
import { MeasurementService } from './measurement.service';
import { DatabaseModule } from '../../common/database/database.module';
import { measurementProviders } from './measurement.providers';
import { MeasurementController } from './measurement.controller';

@Module({
  modules: [DatabaseModule],
  components: [
    ...measurementProviders,
    MeasurementService,
  ],
  controllers: [MeasurementController]
})
export class MeasurementModule { }
