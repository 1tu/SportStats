import { Repository, FindManyOptions } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { AServiceBase } from '../../common/service';
import { SportsmanEntity } from './sportsman.entity';

@Component()
export class SportsmanService extends AServiceBase<SportsmanEntity> {
  constructor( @Inject('SportsmanRepositoryToken') _repository: Repository<SportsmanEntity>) {
    super(_repository);
  }
}
