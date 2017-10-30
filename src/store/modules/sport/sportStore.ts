import Vuex from 'vuex';
import { State as vState, Getter as vGetter, Mutation as vMutation, Action as vAction, namespace } from 'vuex-class';
import { getter, mutation, action, decorator, keymirror } from '../../vuexTypes';
import { SportStoreState } from './SportStoreState';
import { Sport } from '../../../../@types';
import { sportApi } from '../../../api/sportApi';

const storeName = 'sport';
const state: SportStoreState = {
  item: null
};

const getters = getter(state, {});

const mutations = mutation(state, {
  item(state: SportStoreState, item: Sport) {
    state.item = item;
  }
});

const actions = action(state, {
  async itemGet({ commit, state }, id: number): Promise<Sport> {
    commit(types.mutation.item, await sportApi.show(id));
    return state.item;
  },
});

const types = {
  state: keymirror(state),
  getter: keymirror(getters),
  mutation: keymirror(mutations),
  action: keymirror(actions)
};

export const sport = {
  namespaced: true, state, getters, mutations, actions
};

export const SportTypes = types;
export const SportState = decorator(namespace(storeName, vState), types.state);
export const SportGetter = decorator(namespace(storeName, vGetter), types.getter);
export const SportMutation = decorator(namespace(storeName, vMutation), types.mutation);
export const SportAction = decorator(namespace(storeName, vAction), types.action);
