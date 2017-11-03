import { Connection, Repository } from 'typeorm';
import { SportsmanEntity } from './sportsman.entity';

export const sportsmanProviders = [
  {
    provide: 'SportsmanRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(SportsmanEntity),
    inject: ['DbConnectionToken'],
  },
];
