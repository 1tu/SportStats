import Vuex from 'vuex';
import { State as vState, Getter as vGetter, Mutation as vMutation, Action as vAction, namespace } from 'vuex-class';
import { getter, mutation, action, decorator, keymirror } from '../../vuexTypes';
import { UserListStoreState } from './UserListStoreState';
import { User } from '../../../../@types';
import { userApi } from '../../../api/userApi';

const storeName = 'userList';
const state: UserListStoreState = {
  items: []
};

const getters = getter(state, {
  itemsByRole(state) {
    return (role_id: number) => state.items.filter((item) => item.role_id === role_id);
  },
  itemById(state) {
    return (id: number) => state.items.filter((item) => item.id === id)[0];
  }
});

const mutations = mutation(state, {
  items(state, items: User[]) {
    state.items = items;
  }
});

const actions = action(state, {
  async itemsGet({ commit, state, rootState }): Promise<User[]> {
    if (state.items.length) { return state.items; }
    const items = await userApi.index();
    commit(types.mutation.items, items);
    return state.items;
  }
});

const types = {
  state: keymirror(state),
  getter: keymirror(getters),
  mutation: keymirror(mutations),
  action: keymirror(actions)
};

export const userList = {
  namespaced: true, state, getters, mutations, actions
};

export const UserListTypes = types;
export const UserListState = decorator(namespace(storeName, vState), types.state);
export const UserListGetter = decorator(namespace(storeName, vGetter), types.getter);
export const UserListMutation = decorator(namespace(storeName, vMutation), types.mutation);
export const UserListAction = decorator(namespace(storeName, vAction), types.action);

