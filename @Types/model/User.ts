import { SsModel, Token, Role, Profile } from './';

export class User extends SsModel {
  constructor() {
    super();
    this.username = null;
    this.email = null;
    this.password = null;
    this.enroll_expires_at = null;
  }
  username: string;
  email: string;
  password: string;
  enroll_expires_at: Date;

  tokens: Token[];
  role: Role;
  profile: Profile;
  role_id: number;
  organization_id: number;
}
