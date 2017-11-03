import { Repository, FindManyOptions } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { AServiceBase } from '../../common/service';
import { TemplateMeasurementEntity } from './templateMeasurement.entity';

@Component()
export class TemplateMeasurementService extends AServiceBase<TemplateMeasurementEntity> {
  constructor( @Inject('TemplateMeasurementRepositoryToken') _repository: Repository<TemplateMeasurementEntity>) {
    super(_repository);
  }
}
