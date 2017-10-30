export class SsModel {
  constructor() {
    this.id = null;
    this.created_at = null;
    this.updated_at = null;
  }
  id: number;
  created_at: Date;
  updated_at: Date;
}

type ModelTypes = 'string' | 'number' | 'boolean' | 'entity' | 'array';

export interface IModel {
  type: ModelTypes;
  validators: Array<(value: any, ...opts) => boolean>;

}
