import { SsModel, Image, User, Team } from "./index";

export interface Organization extends SsModel {
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
