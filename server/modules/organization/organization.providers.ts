import { Connection, Repository } from 'typeorm';
import { OrganizationEntity } from './organization.entity';

export const organizationProviders = [
  {
    provide: 'OrganizationRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(OrganizationEntity),
    inject: ['DbConnectionToken'],
  },
];
