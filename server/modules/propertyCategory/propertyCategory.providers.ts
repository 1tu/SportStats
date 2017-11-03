import { Connection, Repository } from 'typeorm';
import { PropertyCategoryEntity } from './propertyCategory.entity';

export const propertyCategoryProviders = [
  {
    provide: 'PropertyCategoryRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(PropertyCategoryEntity),
    inject: ['DbConnectionToken'],
  },
];
