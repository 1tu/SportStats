import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DatabaseModule } from '../../common/database/database.module';
import { userProviders } from './user.providers';
import { UserController } from './user.controller';

@Module({
  modules: [DatabaseModule],
  components: [
    ...userProviders,
    UserService,
  ],
  controllers: [UserController]
})
export class UserModule { }
