import Vuex from 'vuex';
import { State as vState, Getter as vGetter, Mutation as vMutation, Action as vAction, namespace } from 'vuex-class';
import { getter, mutation, action, decorator, keymirror } from '../../vuexTypes';
import { PropertyListStoreState } from './PropertyListStoreState';
import { Property } from '../../../../@types';
import { propertyApi } from '../../../api/propertyApi';

const storeName = 'propertyList';
const state: PropertyListStoreState = {
  items: []
};

const getters = getter(state, {
  itemById(state) {
    return (id: number) => state.items.filter((item) => item.id === id)[0];
  }
});

const mutations = mutation(state, {
  items(state, items: Property[]) {
    state.items = items;
  }
});

const actions = action(state, {
  async itemsGet({ commit, state, rootState }): Promise<Property[]> {
    if (state.items.length) { return state.items; }
    const items = await propertyApi.index();
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

export const propertyList = {
  namespaced: true, state, getters, mutations, actions
};

export const PropertyListTypes = types;
export const PropertyListState = decorator(namespace(storeName, vState), types.state);
export const PropertyListGetter = decorator(namespace(storeName, vGetter), types.getter);
export const PropertyListMutation = decorator(namespace(storeName, vMutation), types.mutation);
export const PropertyListAction = decorator(namespace(storeName, vAction), types.action);

