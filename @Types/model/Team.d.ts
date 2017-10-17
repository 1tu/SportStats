import { SsModel, Trainer, Sportsman, Organization } from "./index";

export interface Team extends SsModel {
  name: string;
  name_full: string;
  birthdate: Date;
  organization: Organization;
  trainers: Trainer[];
  sportsmen: Sportsman[];

  organization_id: number;
  sport_id: number;
  logo_id: number;
}
