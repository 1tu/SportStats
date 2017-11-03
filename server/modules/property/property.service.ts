import { Repository, FindManyOptions } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { AServiceBase } from '../../common/service';
import { PropertyEntity } from './property.entity';

@Component()
export class PropertyService extends AServiceBase<PropertyEntity> {
  constructor( @Inject('PropertyRepositoryToken') _repository: Repository<PropertyEntity>) {
    super(_repository);
  }
}
