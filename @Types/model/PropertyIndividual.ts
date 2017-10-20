import { SsModel, Property, Sportsman, Trainer, StatsTemplateIndividual } from './';

export class PropertyIndividual extends SsModel {
  constructor() {
    super();
    this.value = null;
  }
  value: number;

  property: Property;
  sportsman: Sportsman;
  trainer: Trainer;
  template: StatsTemplateIndividual;
  property_id: number;
  sportsman_id: number;
  trainer_id: number;
  template_id: number;
}
