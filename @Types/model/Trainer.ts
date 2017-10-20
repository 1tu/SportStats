import { SsModel, User, Profile, Sport } from './';

export class Trainer extends SsModel {
  constructor() {
    super();
  }

  user: User;
  profile: Profile;
  sport: Sport;
  profile_id: number;
  user_id: number;
  sport_id: number;
}
