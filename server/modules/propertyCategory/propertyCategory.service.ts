import { Repository, FindManyOptions } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { AServiceBase } from '../../common/service';
import { PropertyCategoryEntity } from './propertyCategory.entity';

@Component()
export class PropertyCategoryService extends AServiceBase<PropertyCategoryEntity> {
  constructor( @Inject('PropertyCategoryRepositoryToken') _repository: Repository<PropertyCategoryEntity>) {
    super(_repository);
  }
}
