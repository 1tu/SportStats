import axios from 'axios';
import { CommonApi } from './_base';
import { Sportsman } from '../../@types';

class SportsmanApi extends CommonApi<Sportsman> {
  constructor() {
    super('sportsman');
  }

  getProfile() {
    return axios.get('/profile');
  }
}

export const sportsmanApi = new SportsmanApi();
