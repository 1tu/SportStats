import { Repository, FindManyOptions } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { AServiceBase } from '../../common/service';
import { TeamEntity } from './team.entity';

@Component()
export class TeamService extends AServiceBase<TeamEntity> {
  constructor( @Inject('TeamRepositoryToken') _repository: Repository<TeamEntity>) {
    super(_repository);
  }
}
