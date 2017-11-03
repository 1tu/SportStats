import * as path from 'path';
import { Config } from './index';

const config: Config = {
  env: 'test',
  server: {
    port: 3003,
  },
  db: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'developer',
    password: '1q2w3e4r',
    database: 'sportstats_dev',
    synchronize: true,
    entities: [
      path.join(__dirname, '/../modules/**/*.entity.ts'),
    ],
    cli: {
      migrationsDir: path.join(__dirname, '/../migration'),
    }
  }
};

export default config;
