import Vuex from 'vuex';
import { State as vState, Getter as vGetter, Mutation as vMutation, Action as vAction, namespace } from 'vuex-class';
import { getter, mutation, action, decorator, keymirror } from '../../vuexTypes';
import { TeamListStoreState } from './TeamListStoreState';
import { Team } from '../../../../@types';
import { teamApi } from '../../../api/teamApi';

const storeName = 'teamList';
const state: TeamListStoreState = {
  items: []
};

const getters = getter(state, {
  itemById(state) {
    return (id: number) => state.items.filter((item) => item.id === id)[0];
  }
});

const mutations = mutation(state, {
  items(state, items: Team[]) {
    state.items = items;
  }
});

const actions = action(state, {
  async itemsGet({ commit, state, rootState }): Promise<Team[]> {
    if (state.items.length) { return state.items; }
    const items = await teamApi.index();
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

export const teamList = {
  namespaced: true, state, getters, mutations, actions
};

export const TeamListTypes = types;
export const TeamListState = decorator(namespace(storeName, vState), types.state);
export const TeamListGetter = decorator(namespace(storeName, vGetter), types.getter);
export const TeamListMutation = decorator(namespace(storeName, vMutation), types.mutation);
export const TeamListAction = decorator(namespace(storeName, vAction), types.action);

