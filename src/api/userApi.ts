import axios from 'axios';
import { CommonApi } from './_base';
import { User } from '../../@Types';

class UserApi extends CommonApi<User> {
  constructor() {
    super('user');
  }

  getProfile() {
    return axios.get('/profile');
  }
}

export const userApi = new UserApi();
