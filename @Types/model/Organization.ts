import { SsModel, Image, User, Team } from './';

export class Organization extends SsModel {
  constructor() {
    super();
    this.name = null;
    this.name_full = null;
    this.description = null;
    this.birthdate = null;
    this.country = null;
    this.city = null;
    this.address = null;
    this.phone = null;
    this.enroll_expires_at = null;
  }
  name: string;
  name_full: string;
  description: string;
  birthdate: Date;
  country: string;
  city: string;
  address: string;
  phone: string;
  enroll_expires_at: Date;

  owner: User;
  logo: Image;
  teams: Team[];
  staff: User[];
  owner_id: number;
  logo_id: number;
}
