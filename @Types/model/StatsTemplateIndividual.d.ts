import { SsModel, Property, Sport } from "./";

export interface StatsTemplateIndividual extends SsModel {
  name: string;
  sport: Sport;
  properies: Property[];

  sport_id: number;
}
