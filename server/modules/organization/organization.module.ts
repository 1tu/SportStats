import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { DatabaseModule } from '../../common/database/database.module';
import { organizationProviders } from './organization.providers';
import { OrganizationController } from './organization.controller';

@Module({
  modules: [DatabaseModule],
  components: [
    ...organizationProviders,
    OrganizationService,
  ],
  controllers: [OrganizationController]
})
export class OrganizationModule { }
