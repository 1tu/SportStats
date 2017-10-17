import { ActionContext, Store, Module } from 'vuex';
import { SportsmanListState } from './SportsmanListStoreState';
import { getStoreAccessors } from 'vuex-typescript';
import { State as RootState } from '../../index';
import { Sportsman } from '../../../../@Types';
import { sportsmanApi } from '../../../api/sportsmanApi';

type SportsmanContext = ActionContext<SportsmanListState, RootState>;

export const sportsmanList = {
  namespaced: true,
  state: {
    items: [],
  },

  getters: {
    itemById(state: SportsmanListState) {
      return (id: number) => state.items.filter((item) => item.id === id)[0];
    }
  },

  mutations: {
    items(state: SportsmanListState, items: Sportsman[]) {
      state.items = items;
    }
  },

  actions: {
    async itemsGet(context: SportsmanContext): Promise<Sportsman[]> {
      if (context.state.items.length) {
        return context.state.items;
      }
      const items = await sportsmanApi.index();
      sSportsmanItems(context, items);
      return context.state.items;
    },
  },
};

const { commit, read, dispatch } = getStoreAccessors<SportsmanListState, RootState>('sportsmanList');

const getters = sportsmanList.getters;
export const gSportsmanItemById = read(getters.itemById);

const actions = sportsmanList.actions;
export const dSportsmanItemsGet = dispatch(actions.itemsGet);

const mutations = sportsmanList.mutations;
export const sSportsmanItems = commit(mutations.items);
