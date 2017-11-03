import { Repository, FindManyOptions } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { AServiceBase } from '../../common/service';
import { ImageEntity } from './image.entity';

@Component()
export class ImageService extends AServiceBase<ImageEntity> {
  constructor( @Inject('ImageRepositoryToken') _repository: Repository<ImageEntity>) {
    super(_repository);
  }
}
