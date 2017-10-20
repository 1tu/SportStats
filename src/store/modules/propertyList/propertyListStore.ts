import { ActionContext, Store, Module } from 'vuex';
import { PropertyListState } from './PropertyListStoreState';
import { getStoreAccessors } from 'vuex-typescript';
import { State as RootState } from '../../index';
import { Property } from '../../../../@Types';
import { propertyApi } from '../../../api/propertyApi';

type PropertyContext = ActionContext<PropertyListState, RootState>;

export const propertyList = {
  namespaced: true,
  state: {
    items: [],
  },

  getters: {
    itemById(state: PropertyListState) {
      return (id: number) => state.items.filter((item) => item.id === id)[0];
    }
  },

  mutations: {
    items(state: PropertyListState, items: Property[]) {
      state.items = items;
    }
  },

  actions: {
    async itemsGet(context: PropertyContext): Promise<Property[]> {
      if (context.state.items.length) {
        return context.state.items;
      }
      const items = await propertyApi.index();
      sPropertyItems(context, items);
      return context.state.items;
    },
  },
};

const { commit, read, dispatch } = getStoreAccessors<PropertyListState, RootState>('propertyList');

const getters = propertyList.getters;
export const gPropertyItemById = read(getters.itemById);

const actions = propertyList.actions;
export const dPropertyItemsGet = dispatch(actions.itemsGet);

const mutations = propertyList.mutations;
export const sPropertyItems = commit(mutations.items);
