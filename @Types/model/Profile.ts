import { SsModel, User, Sportsman, Trainer, Image } from './';

export class Profile extends SsModel {
  constructor() {
    super();
    this.name_first = null;
    this.name_second = null;
    this.name_last = null;
    this.birthdate = null;
    this.city = null;
    this.country = null;
    this.phone = null;
  }
  name_first: string;
  name_second: string;
  name_last: string;
  birthdate: Date;
  city: string;
  country: string;
  phone: string;

  photo: Image;
  sportsman: Sportsman;
  trainer: Trainer;
  user: User;
}
