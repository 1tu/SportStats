import { Repository, FindManyOptions } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { AServiceBase } from '../../common/service';
import { ProfileEntity } from './profile.entity';

@Component()
export class ProfileService extends AServiceBase<ProfileEntity> {
  constructor( @Inject('ProfileRepositoryToken') _repository: Repository<ProfileEntity>) {
    super(_repository);
  }
}
