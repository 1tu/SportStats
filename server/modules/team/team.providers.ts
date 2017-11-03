import { Connection, Repository } from 'typeorm';
import { TeamEntity } from './team.entity';

export const teamProviders = [
  {
    provide: 'TeamRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(TeamEntity),
    inject: ['DbConnectionToken'],
  },
];
