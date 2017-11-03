import dev from './development';
import test from './test';
import prod from './production';
import { ConnectionOptions } from 'typeorm';

export class Config {
  env: 'dev' | 'test' | 'prod';
  server: { port: number };
  db: ConnectionOptions;
}

let config: Config;
switch (process.env.NODE_ENV || 'dev') {
  case 'dev':
  case 'development':
    config = dev;
    break;
  case 'test':
  case 'testing':
    config = test;
    break;
  case 'prod':
  case 'production':
    config = prod;
    break;
}


export default config;
