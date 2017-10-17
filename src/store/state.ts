import {
  UserListState, UserState, SportsmanState, SportsmanListState, SportState,
  TeamListState, TeamState,
} from './modules';

export interface State {
  navShow: boolean;

  userList?: UserListState;
  user?: UserState;
  sport?: SportState;
  sportsmanList?: SportsmanListState;
  sportsman?: SportsmanState;
  teamList?: TeamListState;
  team?: TeamState;
}
