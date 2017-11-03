import { Connection, Repository } from 'typeorm';
import { ProfileEntity } from './profile.entity';

export const profileProviders = [
  {
    provide: 'ProfileRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(ProfileEntity),
    inject: ['DbConnectionToken'],
  },
];
