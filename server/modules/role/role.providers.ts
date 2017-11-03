import { Connection, Repository } from 'typeorm';
import { RoleEntity } from './role.entity';

export const roleProviders = [
  {
    provide: 'RoleRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(RoleEntity),
    inject: ['DbConnectionToken'],
  },
];
