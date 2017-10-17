import { SsModel, Property, Sportsman, Trainer, StatsTemplateIndividual } from "./";

export interface PropertyIndividual extends SsModel {
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
