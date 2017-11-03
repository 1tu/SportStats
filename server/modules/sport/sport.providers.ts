import { Connection, Repository } from 'typeorm';
import { SportEntity } from './sport.entity';

export const sportProviders = [
  {
    provide: 'SportRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(SportEntity),
    inject: ['DbConnectionToken'],
  },
];
