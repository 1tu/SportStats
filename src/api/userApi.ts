import axios from 'axios';
import { CommonApi } from './Common';
import { User } from '../../@Types/Models';

export const userApi = new CommonApi<User>('user');

class UserApi<M> extends CommonApi<M> {
  constructor(modelName: string) {
    super(modelName);
  }

  getProfile() {
    return axios.get('/profile');
  }
}
