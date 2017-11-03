import { Connection, Repository } from 'typeorm';
import { TemplateMeasurementEntity } from './templateMeasurement.entity';

export const templateMeasurementProviders = [
  {
    provide: 'TemplateMeasurementRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(TemplateMeasurementEntity),
    inject: ['DbConnectionToken'],
  },
];
