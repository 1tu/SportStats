import { Repository, FindManyOptions, SaveOptions, RemoveOptions, FindOneOptions } from 'typeorm';
import { Inject } from '@nestjs/common';
import { AEntityBase } from '../entity/index';

export abstract class AServiceBase<E extends AEntityBase> {
  constructor(private _repository: Repository<E>) { }

  async getOneById(id, opts?: FindOneOptions<E>): Promise<E> {
    return this._repository.findOneById(id, opts);
  }

  async get(opts?: FindManyOptions<E>): Promise<E[]> {
    return this._repository.find(opts);
  }

  async post(model: Partial<E> | Partial<E>[], opts?: SaveOptions) {
    return this._repository.insert(model, opts);
  }

  async put(model: Partial<E>, opts?: SaveOptions) {
    return this._repository.updateById(model.id, model, opts);
  }

  async delete(id: any, opts?: RemoveOptions) {
    return this._repository.deleteById(id, opts);
  }
}
