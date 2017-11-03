import { Repository, FindManyOptions } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { TokenEntity } from './token.entity';
import { AServiceBase } from '../../common/service';

@Component()
export class TokenService extends AServiceBase<TokenEntity> {
  constructor( @Inject('TokenRepositoryToken') _repository: Repository<TokenEntity>) {
    super(_repository);
  }
}
