import { SsModel, Permission } from "./";

export interface Role extends SsModel {
  name: string;
  permissions: Permission[];
}
