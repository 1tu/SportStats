import { Connection, Repository } from 'typeorm';
import { ImageEntity } from './image.entity';

export const imageProviders = [
  {
    provide: 'ImageRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(ImageEntity),
    inject: ['DbConnectionToken'],
  },
];
