import { UserListState } from './modules/userList/userListState';

export interface State {
  navShow: boolean;

  userList?: UserListState;
}
