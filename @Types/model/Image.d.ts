import { SsModel, User } from "./";

export interface Image extends SsModel {
  url: string;
  title: string;
  description: string;
  author: User;

  author_id: number;
}
