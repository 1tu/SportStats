import Vue from 'vue';
import Vuex from 'vuex';
import { State } from './';
import { getStoreAccessors } from 'vuex-typescript';
import {
  userList, UserListState, user, UserState, SportState, sport,
  sportsmanList, SportsmanListState, sportsman, SportsmanState,
  teamList, team, TeamListState, TeamState, PropertyListState, propertyList,
} from './modules';

Vue.use(Vuex);

export const store = new Vuex.Store<State>({
  state: {
    navShow: true
  },
  mutations: {
    TOGGLE_NAV(state) {
      state.userList.items;
      state.navShow = !state.navShow;
    }
  },
  strict: process.env.NODE_ENV !== 'production',
});

store.registerModule<UserState>('user', user);
store.registerModule<UserListState>('userList', userList);
store.registerModule<SportState>('sport', sport);
store.registerModule<SportsmanState>('sportsman', sportsman);
store.registerModule<SportsmanListState>('sportsmanList', sportsmanList);
store.registerModule<TeamState>('team', team);
store.registerModule<TeamListState>('teamList', teamList);
store.registerModule<PropertyListState>('propertyList', propertyList);
