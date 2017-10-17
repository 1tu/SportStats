import { ActionContext, Store, Module } from 'vuex';
import { UserListState } from './UserListStoreState';
import { getStoreAccessors } from 'vuex-typescript';
import { State as RootState } from '../../index';
import { User } from '../../../../@Types';
import { userApi } from '../../../api/userApi';

type UserContext = ActionContext<UserListState, RootState>;

export const userList = {
  namespaced: true,
  state: {
    items: [],
  },

  getters: {
    itemsByRole(state: UserListState) {
      return (role_id: number) => state.items.filter((item) => item.role_id === role_id);
    },
    itemById(state: UserListState) {
      return (id: number) => state.items.filter((item) => item.id === id)[0];
    }
  },

  mutations: {
    items(state: UserListState, items: User[]) {
      state.items = items;
    }
  },

  actions: {
    async itemsGet(context: UserContext): Promise<User[]> {
      if (context.state.items.length) {
        return context.state.items;
      }
      const items = await userApi.index();
      sUserItems(context, items);
      return context.state.items;
    },
  },
};

const { commit, read, dispatch } = getStoreAccessors<UserListState, RootState>('userList');

const getters = userList.getters;
export const gUserItemById = read(getters.itemById);
export const gUserListByRole = read(getters.itemsByRole);

const actions = userList.actions;
export const dUserItemsGet = dispatch(actions.itemsGet);

const mutations = userList.mutations;
export const sUserItems = commit(mutations.items);
