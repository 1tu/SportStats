import { Repository, FindManyOptions } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { AServiceBase } from '../../common/service';
import { MeasurementEntity } from './measurement.entity';

@Component()
export class MeasurementService extends AServiceBase<MeasurementEntity> {
  constructor( @Inject('MeasurementRepositoryToken') _repository: Repository<MeasurementEntity>) {
    super(_repository);
  }
}
