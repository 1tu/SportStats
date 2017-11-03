import { Repository, FindManyOptions } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { AServiceBase } from '../../common/service';
import { OrganizationEntity } from './organization.entity';

@Component()
export class OrganizationService extends AServiceBase<OrganizationEntity> {
  constructor( @Inject('OrganizationRepositoryToken') _repository: Repository<OrganizationEntity>) {
    super(_repository);
  }
}
