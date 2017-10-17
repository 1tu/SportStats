import { SsModel } from "./";

export interface Token extends SsModel {
  user_id: number;
  token: string;
  is_rewoked: boolean;
}
