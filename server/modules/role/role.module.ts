import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { DatabaseModule } from '../../common/database/database.module';
import { roleProviders } from './role.providers';
import { RoleController } from './role.controller';

@Module({
  modules: [DatabaseModule],
  components: [
    ...roleProviders,
    RoleService,
  ],
  controllers: [RoleController]
})
export class RoleModule { }
