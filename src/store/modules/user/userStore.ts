import Vuex from 'vuex';
import { State as vState, Getter as vGetter, Mutation as vMutation, Action as vAction, namespace } from 'vuex-class';
import { getter, mutation, action, decorator, keymirror } from '../../vuexTypes';
import { UserStoreState } from './UserStoreState';
import { User } from '../../../../@types';
import { userApi } from '../../../api/userApi';

const storeName = 'user';
const state: UserStoreState = {
  item: null
};

const getters = getter(state, {});

const mutations = mutation(state, {
  item(state: UserStoreState, item: User) {
    state.item = item;
  }
});

const actions = action(state, {
  async itemGet({ commit, state }, id: number): Promise<User> {
    commit(types.mutation.item, await userApi.show(id));
    return state.item;
  },
});

const types = {
  state: keymirror(state),
  getter: keymirror(getters),
  mutation: keymirror(mutations),
  action: keymirror(actions)
};

export const user = {
  namespaced: true, state, getters, mutations, actions
};

export const UserTypes = types;
export const UserState = decorator(namespace(storeName, vState), types.state);
export const UserGetter = decorator(namespace(storeName, vGetter), types.getter);
export const UserMutation = decorator(namespace(storeName, vMutation), types.mutation);
export const UserAction = decorator(namespace(storeName, vAction), types.action);
