import { ActionContext, Store, Module } from 'vuex';
import { TeamState } from './TeamStoreState';
import _ from 'lodash';
import { getStoreAccessors } from 'vuex-typescript';
import { State as RootState } from '../../index';
import { Team, PropertyIndividual, DateRange } from '../../../../@Types';
import { teamApi } from '../../../api/teamApi';
import { seriesListFromSportsman, seriesGrowingFromSeries, seriesByDateRange } from '../../helpers/index';

type TeamContext = ActionContext<TeamState, RootState>;

export const team = {
  namespaced: true,
  state: {
    item: null,
    seriesByProperty: {}
  },

  getters: {
    propertyList(state: TeamState) {
      return Object.keys(state.seriesByProperty);
    },
    seriesByProperty(state: TeamState) {
      return (propName: string, datesLimit?: DateRange) => datesLimit
        ? seriesByDateRange(state.seriesByProperty[propName], datesLimit)
        : state.seriesByProperty[propName];
    },
    seriesGrowingByProperty(state: TeamState, getters) {
      return (property: string, datesLimit?: DateRange) =>
        seriesGrowingFromSeries(getters.seriesByProperty(property, datesLimit), property);
    },
    filterDateLimits(state: TeamState): DateRange {
      const datesArr = _(state.item.sportsmen)
        .map(sportsman => sportsman.measurements).flatten()
        .map((pi: PropertyIndividual) => new Date(pi.created_at).getTime()).value();

      return { start: new Date(_.min(datesArr)), end: new Date(_.max(datesArr)) };
    }
  },

  mutations: {
    item(state: TeamState, item: Team) {
      state.item = item;
    },
    seriesByProperty(state: TeamState) {
      state.seriesByProperty = seriesListFromSportsman(state.item.sportsmen);
    }
  },

  actions: {
    async itemGet(context: TeamContext, id: number): Promise<Team> {
      sTeamItem(context, await teamApi.show(id));
      sTeamSeriesByProperty(context);
      return context.state.item;
    },
  },
};

const { commit, read, dispatch } = getStoreAccessors<TeamState, RootState>('team');

const getters = team.getters;
export const gTeamPropertyList = read(getters.propertyList);
export const gTeamSeriesByProperty = read(getters.seriesByProperty);
export const gTeamSeriesPropertyGrowing = read(getters.seriesGrowingByProperty);
export const gTeamMeasurementFilterDateLimits = read(getters.filterDateLimits);

const actions = team.actions;
export const dTeamGet = dispatch(actions.itemGet);

const mutations = team.mutations;
export const sTeamItem = commit(mutations.item);
export const sTeamSeriesByProperty = commit(mutations.seriesByProperty);
