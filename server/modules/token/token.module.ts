import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { DatabaseModule } from '../../common/database/database.module';
import { tokenProviders } from './token.providers';
import { TokenController } from './token.controller';

@Module({
  modules: [DatabaseModule],
  components: [
    ...tokenProviders,
    TokenService,
  ],
  controllers: [TokenController]
})
export class TokenModule { }
