import { Connection, Repository } from 'typeorm';
import { PermissionEntity } from './permission.entity';

export const permissionProviders = [
  {
    provide: 'PermissionRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(PermissionEntity),
    inject: ['DbConnectionToken'],
  },
];
