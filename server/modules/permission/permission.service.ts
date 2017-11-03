import { Repository, FindManyOptions } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { AServiceBase } from '../../common/service';
import { PermissionEntity } from './permission.entity';

@Component()
export class PermissionService extends AServiceBase<PermissionEntity> {
  constructor( @Inject('PermissionRepositoryToken') _repository: Repository<PermissionEntity>) {
    super(_repository);
  }
}
