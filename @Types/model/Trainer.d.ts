import { SsModel, User, Profile, Sport } from "./";

export interface Trainer extends SsModel {
  user: User;
  profile: Profile;
  sport: Sport;

  profile_id: number;
  user_id: number;
  sport_id: number;
}
