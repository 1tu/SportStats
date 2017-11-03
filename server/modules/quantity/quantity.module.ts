import { Module } from '@nestjs/common';
import { QuantityService } from './quantity.service';
import { DatabaseModule } from '../../common/database/database.module';
import { quantityProviders } from './quantity.providers';
import { QuantityController } from './quantity.controller';

@Module({
  modules: [DatabaseModule],
  components: [
    ...quantityProviders,
    QuantityService,
  ],
  controllers: [QuantityController]
})
export class QuantityModule { }
