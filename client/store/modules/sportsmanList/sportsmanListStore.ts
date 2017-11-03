import Vuex from 'vuex';
import { State as vState, Getter as vGetter, Mutation as vMutation, Action as vAction, namespace } from 'vuex-class';
import { getter, mutation, action, decorator, keymirror } from '../../vuexTypes';
import { SportsmanListStoreState } from './SportsmanListStoreState';
import { Sportsman } from '../../../../@types';
import { sportsmanApi } from '../../../api/sportsmanApi';

const storeName = 'sportsmanList';
const state: SportsmanListStoreState = {
  items: []
};

const getters = getter(state, {
  itemById(state) {
    return (id: number) => state.items.filter((item) => item.id === id)[0];
  }
});

const mutations = mutation(state, {
  items(state, items: Sportsman[]) {
    state.items = items;
  }
});

const actions = action(state, {
  async itemsGet({ commit, state, rootState }): Promise<Sportsman[]> {
    if (state.items.length) { return state.items; }
    const items = await sportsmanApi.index();
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

export const sportsmanList = {
  namespaced: true, state, getters, mutations, actions
};

export const SportsmanListTypes = types;
export const SportsmanListState = decorator(namespace(storeName, vState), types.state);
export const SportsmanListGetter = decorator(namespace(storeName, vGetter), types.getter);
export const SportsmanListMutation = decorator(namespace(storeName, vMutation), types.mutation);
export const SportsmanListAction = decorator(namespace(storeName, vAction), types.action);
