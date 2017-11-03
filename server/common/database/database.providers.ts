import * as path from 'path';
import { createConnection } from 'typeorm';
import config from './../../config/index';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection(config.db),
  },
];
