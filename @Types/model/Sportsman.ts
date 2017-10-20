import { SsModel, User, Profile, Sport, Trainer, PropertyIndividual } from './';

export class Sportsman extends SsModel {
  constructor() {
    super();
    this.position = null;
    this.career_began_at = null;
    this.career_ended_at = null;
  }
  position: number;
  career_began_at: Date;
  career_ended_at: Date;

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
