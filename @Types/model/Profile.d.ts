import { SsModel, User, Sportsman, Trainer } from "./";

export interface Profile extends SsModel {
  name_first: string;
  name_second: string;
  name_last: string;
  birthdate: Date;
  city: string;
  country: string;
  phone: string;
  photo: string;
  sportsman: Sportsman;
  trainer: Trainer;
  user: User;
}
