import { Module } from '@nestjs/common';
import { TemplateMeasurementService } from './templateMeasurement.service';
import { DatabaseModule } from '../../common/database/database.module';
import { templateMeasurementProviders } from './templateMeasurement.providers';
import { TemplateMeasurementController } from './templateMeasurement.controller';

@Module({
  modules: [DatabaseModule],
  components: [
    ...templateMeasurementProviders,
    TemplateMeasurementService,
  ],
  controllers: [TemplateMeasurementController]
})
export class TemplateMeasurementModule { }
