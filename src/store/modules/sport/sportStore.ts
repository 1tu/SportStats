import { ActionContext, Store, Module } from 'vuex';
import { SportState } from './SportStoreState';
import { getStoreAccessors } from 'vuex-typescript';
import { State as RootState } from '../../index';
import { Sport } from '../../../../@Types';
import { sportApi } from '../../../api/sportApi';

type SportContext = ActionContext<SportState, RootState>;

export const sport = {
  namespaced: true,
  state: {
    item: null,
  },

  getters: {
    // getItemsByRole(state: SportState, getters, rootState: RootState, rootGetters) {
    //   return (role_id: number) => state.items.filter((item) => item.role_id === role_id);
    // },
  },

  mutations: {
    item(state: SportState, item: Sport) {
      state.item = item;
    }
  },

  actions: {
    async itemGet(context: SportContext, id: number): Promise<Sport> {
      sSportItem(context, await sportApi.show(id));
      return context.state.item;
    },
  },
};

const { commit, read, dispatch } = getStoreAccessors<SportState, RootState>('sport');

const getters = sport.getters;

const actions = sport.actions;
export const dSportGet = dispatch(actions.itemGet);

const mutations = sport.mutations;
export const sSportItem = commit(mutations.item);
