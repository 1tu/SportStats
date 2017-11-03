import { Module } from '@nestjs/common';
import { PropertyCategoryService } from './propertyCategory.service';
import { DatabaseModule } from '../../common/database/database.module';
import { propertyCategoryProviders } from './propertyCategory.providers';
import { PropertyCategoryController } from './propertyCategory.controller';

@Module({
  modules: [DatabaseModule],
  components: [
    ...propertyCategoryProviders,
    PropertyCategoryService,
  ],
  controllers: [PropertyCategoryController]
})
export class PropertyCategoryModule { }
