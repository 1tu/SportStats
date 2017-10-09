// import Model from '@adonisjs/lucid/src/Lucid/Model';

class Model {
  id: number;
  created_at: Date;
  updated_at: Date;
}

export class User extends Model {
  username: string;
  email: string;
  password: string;
  role_id: number;
  organization_id: number;
  enroll_expires_at: Date;
}
export class Profile extends Model {
  name_first: string;
  name_second: string;
  name_last: string;
  birthdate: Date;
  city: string;
  country: string;
  phone: string;
  photo: string;
}

export class Token extends Model {
  user_id: number;
  token: string;
  is_rewoked: boolean;
}
export class Role extends Model { name: string; }
export class Permission extends Model { name: string; }

export class Image extends Model {
  url: string;
  title: string;
  description: string;
  user_id: number;
}

export class PhysicalQuantity extends Model {
  name: string;
  type: string;
}
export class PropertyCategory extends Model {
  name: string;
}
export class Property extends Model {
  name: string;
  property_category_id: number;
  physical_quantity_id: number;
}

export class Sport extends Model {
  name: string
}
export class StatsTemplateIndividual extends Model {
  name: string;
  sport_id: number;
}

export class PropertyIndividual extends Model {
  value: number;
  property_id: number;
  sportsman_id: number;
  trainer_id: number;
}
export class Sportsman extends Model {
  position: number;
  profile_id: number;
  user_id: number;
  sport_id: number;
  trainer_id: number;
  team_id: number;
}
export class Trainer extends Model {
  profile_id: number;
  user_id: number;
  sport_id: number;
  team_id: number;
}

export class Organization extends Model {
  owner_id: integer;
  logo_id: integer;
  name: string;
  name_full: string;
  description: text;
  birthdate: date;
  country: string;
  city: string;
  address: string;
  phone: string;
  enroll_expires_at: Date;
}
export class Team extends Model {
  organization_id: integer;
  sport_id: integer;
  logo_id: integer;
  name: string;
  name_full: string;
  birthdate: date;
}


