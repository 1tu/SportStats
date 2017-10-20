import { SsModel, Sportsman } from './';

export class Sport extends SsModel {
  constructor() {
    super();
    this.name = null;
  }
  name: string;

  sportsmen: Sportsman[];
}
