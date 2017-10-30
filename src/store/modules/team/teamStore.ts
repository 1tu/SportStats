import Vuex from 'vuex';
import { State as vState, Getter as vGetter, Mutation as vMutation, Action as vAction, namespace } from 'vuex-class';
import { getter, mutation, action, decorator, keymirror } from '../../vuexTypes';
import { TeamStoreState } from './TeamStoreState';
import { Team, DateRange, PropertyIndividual } from '../../../../@types';
import { teamApi } from '../../../api/teamApi';
import { seriesByDateRange, seriesGrowingFromSeries, seriesListFromSportsman } from '../../../helpers/index';
import { flatten, min, max } from 'lodash-es';

const storeName = 'team';
const state: TeamStoreState = {
  item: null,
  seriesByProperty: {}
};

const getters = getter(state, {
  propertyList(state) {
    return Object.keys(state.seriesByProperty);
  },
  seriesByProperty(state) {
    return (propName: string, datesLimit?: DateRange) => datesLimit
      ? seriesByDateRange(state.seriesByProperty[propName], datesLimit)
      : state.seriesByProperty[propName];
  },
  seriesGrowingByProperty(state, getters) {
    return (property: string, datesLimit?: DateRange) =>
      seriesGrowingFromSeries(getters.seriesByProperty(property, datesLimit), property);
  },
  filterDateLimits(state): DateRange {
    const datesArr = flatten(state.item.sportsmen.map(sportsman => sportsman.measurements))
      .map((pi: PropertyIndividual) => new Date(pi.created_at).getTime());

    if (!datesArr.length) return { start: new Date(), end: new Date() };
    return { start: new Date(min(datesArr)), end: new Date(max(datesArr)) };
  }
});

const mutations = mutation(state, {
  item(state, item: Team) {
    state.item = item;
  },
  seriesByProperty(state) {
    state.seriesByProperty = seriesListFromSportsman(state.item.sportsmen);
  }
});

const actions = action(state, {
  async itemGet({ state, commit }, id: number): Promise<Team> {
    commit(types.mutation.item, await teamApi.show(id));
    commit(types.mutation.seriesByProperty);
    return state.item;
  },
});

const types = {
  state: keymirror(state),
  getter: keymirror(getters),
  mutation: keymirror(mutations),
  action: keymirror(actions)
};

export const team = {
  namespaced: true, state, getters, mutations, actions
};

export const TeamTypes = types;
export const TeamState = decorator(namespace(storeName, vState), types.state);
export const TeamGetter = decorator(namespace(storeName, vGetter), types.getter);
export const TeamMutation = decorator(namespace(storeName, vMutation), types.mutation);
export const TeamAction = decorator(namespace(storeName, vAction), types.action);
