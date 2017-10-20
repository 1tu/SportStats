import { SsModel } from './';

export class PhysicalQuantity extends SsModel {
  constructor() {
    super();
    this.name = null;
    this.type = null;
  }
  name: string;
  type: string;
}
