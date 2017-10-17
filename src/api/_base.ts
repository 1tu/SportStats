import axios from 'axios';
import { isArray } from 'lodash';

export class CommonApi<M> {
  public modelName: string;
  constructor(modelName: string) {
    this.modelName = modelName;
  }

  async index(): Promise<M[]> {
    return axios.get(`/${this.modelName}`).then(res => res.data);
  }

  async show(id: number): Promise<M> {
    return axios.get(`/${this.modelName}/${id}`).then(res => res.data);
  }

  async store(model: M): Promise<number> {
    return axios.post(`/${this.modelName}`, model).then(res => res.data);
  }

  async update(model: any): Promise<number> {
    return axios.put(`/${this.modelName}/${model.id}`, model).then(res => res.data);
  }

  async destroy(id: number): Promise<number> {
    return axios.delete(`/${this.modelName}/${id}`).then(res => res.data);
  }
}
