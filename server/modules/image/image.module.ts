import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../common/database/database.module';
import { imageProviders } from './image.providers';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

@Module({
  modules: [DatabaseModule],
  components: [
    ...imageProviders,
    ImageService,
  ],
  controllers: [ImageController]
})
export class ImageModule { }
