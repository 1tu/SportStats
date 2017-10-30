import Vuex from 'vuex';
import { State as vState, Getter as vGetter, Mutation as vMutation, Action as vAction, namespace } from 'vuex-class';
import { getter, mutation, action, decorator, keymirror } from '../../vuexTypes';
import { SportsmanStoreState } from './SportsmanStoreState';
import { Sportsman, DateRange, PropertyIndividual } from '../../../../@types';
import { sportsmanApi } from '../../../api/sportsmanApi';
import { seriesFromPropertyIndividualList, seriesByDateRange } from '../../../helpers/index';
import { IndividualSeriesOptions } from 'highcharts';
import { min, max, groupBy, transform } from 'lodash';

const storeName = 'sportsman';
const state: SportsmanStoreState = {
  item: null
};

const getters = getter(state, {
  seriesFromMeasurements(state, getters) {
    return (datesLimit?: DateRange) => datesLimit
      ? seriesByDateRange(seriesFromPropertyIndividualList(state.item.measurements), datesLimit)
      : seriesFromPropertyIndividualList(state.item.measurements);
  },
  filterDateLimits(state): DateRange {
    const datesArr = state.item.measurements.map((pi: PropertyIndividual) => new Date(pi.created_at).getTime());

    if (!datesArr.length) return { start: new Date(), end: new Date() };
    return { start: new Date(min(datesArr)), end: new Date(max(datesArr)) };
  },
  bestMeasurements(state) {
    return transform(groupBy(state.item.measurements, 'property.name'), (res, piList, propertyName) => {
      res.push({ propertyName, value: max(piList.map(pi => pi.value)) });
    }, []);
  }
});

const mutations = mutation(state, {
  item(state, item: Sportsman) {
    state.item = item;
  }
});

const actions = action(state, {
  async itemGet({ state, commit }, id: number): Promise<Sportsman> {
    commit(types.mutation.item, await sportsmanApi.show(id));
    return state.item;
  }
});

const types = {
  state: keymirror(state),
  getter: keymirror(getters),
  mutation: keymirror(mutations),
  action: keymirror(actions)
};

export const sportsman = {
  namespaced: true, state, getters, mutations, actions
};

export const SportsmanTypes = types;
export const SportsmanState = decorator(namespace(storeName, vState), types.state);
export const SportsmanGetter = decorator(namespace(storeName, vGetter), types.getter);
export const SportsmanMutation = decorator(namespace(storeName, vMutation), types.mutation);
export const SportsmanAction = decorator(namespace(storeName, vAction), types.action);
