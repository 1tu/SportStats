import { Connection, Repository } from 'typeorm';
import { TokenEntity } from './token.entity';

export const tokenProviders = [
  {
    provide: 'TokenRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(TokenEntity),
    inject: ['DbConnectionToken'],
  },
];
