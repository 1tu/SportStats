import { Connection, Repository } from 'typeorm';
import { QuantityEntity } from './quantity.entity';

export const quantityProviders = [
  {
    provide: 'QuantityRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(QuantityEntity),
    inject: ['DbConnectionToken'],
  },
];
