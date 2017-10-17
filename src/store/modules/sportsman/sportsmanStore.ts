import { ActionContext, Store, Module } from 'vuex';
import _ from 'lodash';
import { SportsmanState } from './SportsmanStoreState';
import { getStoreAccessors } from 'vuex-typescript';
import { State as RootState } from '../../index';
import { Sportsman } from '../../../../@Types';
import { sportsmanApi } from '../../../api/sportsmanApi';
import { seriesFromPropertyIndividualList } from '../../helpers/index';
import { IndividualSeriesOptions } from 'highcharts';

type SportsmanContext = ActionContext<SportsmanState, RootState>;

export const sportsman = {
  namespaced: true,
  state: {
    item: null,
  },

  getters: {
    seriesFromPropertyIndividualList(state: SportsmanState, getters): IndividualSeriesOptions[] {
      if (!state.item) return;
      return seriesFromPropertyIndividualList(state.item.measurements);
    },
  },

  mutations: {
    item(state: SportsmanState, item: Sportsman) {
      state.item = item;
    }
  },

  actions: {
    async itemGet(context: SportsmanContext, id: number): Promise<Sportsman> {
      sSportsmanItem(context, await sportsmanApi.show(id));
      return context.state.item;
    },
  },
};

const { commit, read, dispatch } = getStoreAccessors<SportsmanState, RootState>('sportsman');

const getters = sportsman.getters;
export const gSportsmanSeriesFromPropertyIndividualList = read(getters.seriesFromPropertyIndividualList);

const actions = sportsman.actions;
export const dSportsmanGet = dispatch(actions.itemGet);

const mutations = sportsman.mutations;
export const sSportsmanItem = commit(mutations.item);
