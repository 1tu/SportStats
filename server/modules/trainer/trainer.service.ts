import { Repository, FindManyOptions } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { AServiceBase } from '../../common/service';
import { TrainerEntity } from './trainer.entity';

@Component()
export class TrainerService extends AServiceBase<TrainerEntity> {
  constructor( @Inject('TrainerRepositoryToken') _repository: Repository<TrainerEntity>) {
    super(_repository);
  }
}
