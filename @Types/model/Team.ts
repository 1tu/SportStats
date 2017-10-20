import { SsModel, Trainer, Sportsman, Organization } from './';

export class Team extends SsModel {
  constructor() {
    super();
    this.name = null;
    this.name_full = null;
    this.birthdate = null;
  }
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
