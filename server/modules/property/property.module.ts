import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { DatabaseModule } from '../../common/database/database.module';
import { propertyProviders } from './property.providers';
import { PropertyController } from './property.controller';

@Module({
  modules: [DatabaseModule],
  components: [
    ...propertyProviders,
    PropertyService,
  ],
  controllers: [PropertyController]
})
export class PropertyModule { }
