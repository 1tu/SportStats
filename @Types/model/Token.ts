import { SsModel } from './';

export class Token extends SsModel {
  constructor() {
    super();
    this.token = null;
    this.is_rewoked = null;
  }
  token: string;
  is_rewoked: boolean;

  user_id: number;
}
