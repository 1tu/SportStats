// import Model from '@adonisjs/lucid/src/Lucid/Model';
interface Model {
  id: number;
  created_at: Date;
  updated_at: Date;
}

export interface User extends Model {
  username: string;
  email: string;
  password: string;
  role_id: number;
  organization_id: number;
  enroll_expires_at: Date;
}
export interface Profile extends Model {
  name_first: string;
  name_second: string;
  name_last: string;
  birthdate: Date;
  city: string;
  country: string;
  phone: string;
  photo: string;
}

export interface Token extends Model {
  user_id: number;
  token: string;
  is_rewoked: boolean;
}
export interface Role extends Model { name: string; }
export interface Permission extends Model { name: string; }

export interface Image extends Model {
  url: string;
  title: string;
  description: string;
  user_id: number;
}

export interface PhysicalQuantity extends Model {
  name: string;
  type: string;
}
export interface PropertyCategory extends Model {
  name: string;
}
export interface Property extends Model {
  name: string;
  property_category_id: number;
  physical_quantity_id: number;
}

export interface Sport extends Model {
  name: string
}
export interface StatsTemplateIndividual extends Model {
  name: string;
  sport_id: number;
}

export interface PropertyIndividual extends Model {
  value: number;
  property_id: number;
  sportsman_id: number;
  trainer_id: number;
}
export interface Sportsman extends Model {
  position: number;
  profile_id: number;
  user_id: number;
  sport_id: number;
  trainer_id: number;
  team_id: number;
}
export interface Trainer extends Model {
  profile_id: number;
  user_id: number;
  sport_id: number;
  team_id: number;
}

export interface Organization extends Model {
  owner_id: number;
  logo_id: number;
  name: string;
  name_full: string;
  description: string;
  birthdate: Date;
  country: string;
  city: string;
  address: string;
  phone: string;
  enroll_expires_at: Date;
}
export interface Team extends Model {
  organization_id: number;
  sport_id: number;
  logo_id: number;
  name: string;
  name_full: string;
  birthdate: Date;
}


