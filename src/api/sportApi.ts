import axios from 'axios';
import { CommonApi } from './_base';
import { Sport } from '../../@Types';

class SportApi extends CommonApi<Sport> {
  constructor() {
    super('sport');
  }
}

export const sportApi = new SportApi();
