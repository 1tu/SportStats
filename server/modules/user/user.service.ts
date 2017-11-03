import { Repository, FindManyOptions } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { AServiceBase } from '../../common/service';
import { UserEntity } from './user.entity';

@Component()
export class UserService extends AServiceBase<UserEntity> {
  constructor( @Inject('UserRepositoryToken') _repository: Repository<UserEntity>) {
    super(_repository);
  }
}
