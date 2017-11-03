import { Repository, FindManyOptions } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { AServiceBase } from '../../common/service';
import { SportEntity } from './sport.entity';

@Component()
export class SportService extends AServiceBase<SportEntity> {
  constructor( @Inject('SportRepositoryToken') _repository: Repository<SportEntity>) {
    super(_repository);
  }
}
