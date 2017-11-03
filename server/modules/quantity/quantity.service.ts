import { Repository, FindManyOptions } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { AServiceBase } from '../../common/service';
import { QuantityEntity } from './quantity.entity';

@Component()
export class QuantityService extends AServiceBase<QuantityEntity> {
  constructor( @Inject('QuantityRepositoryToken') _repository: Repository<QuantityEntity>) {
    super(_repository);
  }
}
