import { Connection, Repository } from 'typeorm';
import { MeasurementEntity } from './measurement.entity';

export const measurementProviders = [
  {
    provide: 'MeasurementRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(MeasurementEntity),
    inject: ['DbConnectionToken'],
  },
];
