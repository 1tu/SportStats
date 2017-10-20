import { SsModel } from './';

export class PropertyCategory extends SsModel {
  constructor() {
    super();
    this.name = null;
  }
  name: string;
}
