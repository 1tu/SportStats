import { Connection, Repository } from 'typeorm';
import { PropertyEntity } from './property.entity';

export const propertyProviders = [
  {
    provide: 'PropertyRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(PropertyEntity),
    inject: ['DbConnectionToken'],
  },
];
