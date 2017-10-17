import { SsModel, User, Profile, Sport, Trainer, PropertyIndividual } from "./";

export interface Sportsman extends SsModel {
  position: number;
  user: User;
  profile: Profile;
  sport: Sport;
  trainer: Trainer;
  measurements: PropertyIndividual[];

  profile_id: number;
  user_id: number;
  sport_id: number;
  trainer_id: number;
  team_id: number;
}
