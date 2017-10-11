import { ActionContext, Store, Module } from 'vuex';
import { UserListState } from './UserListState';
import { getStoreAccessors } from 'vuex-typescript';
import { State as RootState } from '../../index';
import { User } from '../../../../@Types/Models';
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
    setItems(state: UserListState, items: User[]) {
      state.items = items;
    }
  },

  actions: {
    async getAll(context: UserContext): Promise<User[]> {
      if (context.state.items.length) {
        return context.state.items;
      }
      const items = await userApi.index();
      cSetItems(context, items);
      return context.state.items;
    },
  },
};

const { commit, read, dispatch } =
  getStoreAccessors<UserListState, RootState>('userList');

const getters = userList.getters;
export const rItemById = read(getters.itemById);
export const rItemsByRole = read(getters.itemsByRole);

const actions = userList.actions;
export const dGetAll = dispatch(actions.getAll);

const mutations = userList.mutations;
export const cSetItems = commit(mutations.setItems);
