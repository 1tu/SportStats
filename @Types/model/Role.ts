import { SsModel, Permission } from './';

export class Role extends SsModel {
  constructor() {
    super();
    this.name = null;
  }
  name: string;

  permissions: Permission[];
}
