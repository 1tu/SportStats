import { SsModel, Sportsman } from "./";

export interface Sport extends SsModel {
  name: string;
  sportsmen: Sportsman[];
}
