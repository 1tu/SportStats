import { ActionContext, Store, Module } from 'vuex';
import { UserState } from './UserState';
import { getStoreAccessors } from 'vuex-typescript';
import { State as RootState } from '../../index';
import { User } from '../../../../@Types/Models';
import { userApi } from '../../../api/userApi';

type UserContext = ActionContext<UserState, RootState>;

export const user = {
  namespaced: true,

  state: {
    item: null,
  },

  getters: {
    // getItemsByRole(state: UserState, getters, rootState: RootState, rootGetters) {
    //   return (role_id: number) => state.items.filter((item) => item.role_id === role_id);
    // },
  },

  mutations: {
    setItem(state: UserState, item: User) {
      state.item = item;
    }
  },

  actions: {
    async get(context: UserContext, id: number): Promise<User> {
      let item = context.rootGetters['userList/itemById'](id);
      if (!item) { item = await userApi.show(id); }
      cSetItems(context, item);
      return context.state.item;
    },
  },
};

const { commit, read, dispatch } = getStoreAccessors<UserState, RootState>('user');

const getters = user.getters;

const actions = user.actions;
export const dGet = dispatch(actions.get);

const mutations = user.mutations;
export const cSetItems = commit(mutations.setItem);
