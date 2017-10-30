import {
  UserListStoreState, UserStoreState, SportsmanStoreState, SportsmanListStoreState, SportStoreState,
  TeamListStoreState, TeamStoreState, PropertyListStoreState,
} from './modules';

export interface RootState {
  navShow: boolean;

  userList?: UserListStoreState;
  user?: UserStoreState;
  sport?: SportStoreState;
  sportsmanList?: SportsmanListStoreState;
  sportsman?: SportsmanStoreState;
  teamList?: TeamListStoreState;
  team?: TeamStoreState;
  propertyList?: PropertyListStoreState;
}
