import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { ApplicationModule } from './common/app/index';
import config from './config/index';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(bodyParser.json());
  await app.listen(config.server.port);
}
bootstrap();
