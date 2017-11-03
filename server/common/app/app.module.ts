import { Module } from '@nestjs/common';

import { ImageModule } from '../../modules/image/image.module';
import { MeasurementModule } from '../../modules/measurement/measurement.module';
import { OrganizationModule } from '../../modules/organization/organization.module';
import { PermissionModule } from '../../modules/permission/permission.module';
import { ProfileModule } from '../../modules/profile/profile.module';
import { PropertyModule } from '../../modules/property/property.module';
import { PropertyCategoryModule } from '../../modules/propertyCategory/propertyCategory.module';
import { QuantityModule } from '../../modules/quantity/quantity.module';
import { RoleModule } from '../../modules/role/role.module';
import { SportModule } from '../../modules/sport/sport.module';
import { SportsmanModule } from '../../modules/sportsman/sportsman.module';
import { TeamModule } from '../../modules/team/team.module';
import { TemplateMeasurementModule } from '../../modules/templateMeasurement/templateMeasurement.module';
import { TokenModule } from '../../modules/token/token.module';
import { TrainerModule } from '../../modules/trainer/trainer.module';
import { UserModule } from '../../modules/user/user.module';
import { AppController } from './app.controller';

@Module({
  modules: [
    ImageModule, MeasurementModule, OrganizationModule, PermissionModule, ProfileModule, PropertyModule,
    PropertyCategoryModule, QuantityModule, RoleModule, SportModule, SportsmanModule, TeamModule, TemplateMeasurementModule,
    TokenModule, TrainerModule, UserModule
  ],
  controllers: [AppController]
})
export class ApplicationModule { }
