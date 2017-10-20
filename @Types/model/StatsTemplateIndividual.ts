import { SsModel, Property, Sport } from './';

export class StatsTemplateIndividual extends SsModel {
  constructor() {
    super();
    this.name = null;
  }
  name: string;

  sport: Sport;
  properies: Property[];
  sport_id: number;
}
