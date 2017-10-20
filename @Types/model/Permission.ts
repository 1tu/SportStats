import { SsModel } from './';

export class Permission extends SsModel {
  constructor() {
    super();
    this.name = null;
  }
  name: string;
}
