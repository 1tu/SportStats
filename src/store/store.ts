import Vue from 'vue';
import Vuex from 'vuex';
import { State } from './';
import { getStoreAccessors } from 'vuex-typescript';
import { userList, UserListState } from './modules/userList';
import { user, UserState } from './modules/user';

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

store.registerModule<UserListState>('userList', userList);
store.registerModule<UserState>('user', user);

// const { commit, read, dispatch } =
//   getStoreAccessors<BasketState>('basket');
