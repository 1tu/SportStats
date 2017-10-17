import { SsModel, Token, Role, Profile } from "./";

export interface User extends SsModel {
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
