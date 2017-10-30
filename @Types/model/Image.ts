import { SsModel, User } from './';

export class Image extends SsModel {
  constructor() {
    super();
    this.url = null;
    this.title = null;
    this.description = null;
  }
  url: string;
  title: string;
  description: string;

  author: User;
  author_id: number;
}

class ImageModel {
  // url
}
