import { ActionContext, Store, Module } from 'vuex';
import { UserState } from './UserStoreState';
import { getStoreAccessors } from 'vuex-typescript';
import { State as RootState } from '../../index';
import { User } from '../../../../@Types';
import { userApi } from '../../../api/userApi';

type UserContext = ActionContext<UserState, RootState>;

export const user = {
  namespaced: true,
  state: {
    item: null,
  },

  getters: {
    // getItemsByRole(state: UserState, getters, rootState: RootState, rootGetters) {
    //   return (role_id: number) => state.item.filter((item) => item.role_id === role_id);
    // },
  },

  mutations: {
    item(state: UserState, item: User) {
      state.item = item;
    }
  },

  actions: {
    async itemGet(context: UserContext, id: number): Promise<User> {
      let item = context.rootGetters['userList/itemById'](id);
      if (!item) { item = await userApi.show(id); }
      sUserItem(context, item);
      return context.state.item;
    },
  },
};

const { commit, read, dispatch } = getStoreAccessors<UserState, RootState>('user');

const getters = user.getters;

const actions = user.actions;
export const dUserGet = dispatch(actions.itemGet);

const mutations = user.mutations;
export const sUserItem = commit(mutations.item);
