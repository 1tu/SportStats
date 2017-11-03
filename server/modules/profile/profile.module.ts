import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { DatabaseModule } from '../../common/database/database.module';
import { profileProviders } from './profile.providers';
import { ProfileController } from './profile.controller';

@Module({
  modules: [DatabaseModule],
  components: [
    ...profileProviders,
    ProfileService,
  ],
  controllers: [ProfileController]
})
export class ProfileModule { }
