import Vue from 'vue';
import Vuex from 'vuex';
import { State as vState, Getter as vGetter, Mutation as vMutation, Action as vAction, namespace } from 'vuex-class';
import { RootState } from './';
import { keymirror, mutation, decorator, getter, action } from './vuexTypes';
import {
  userList, user, sport, sportsmanList, sportsman,
  teamList, team, propertyList
} from './modules';

Vue.use(Vuex);

const state: RootState = {
  navShow: true
};

const getters = getter(state, {});

const mutations = mutation(state, {
  toggleNav(state) {
    state.navShow = !state.navShow;
  }
});

const actions = action(state, {});

export const store = new Vuex.Store({
  state,
  mutations,
  modules: {
    userList, user, sport, sportsmanList, sportsman,
    teamList, team, propertyList
  },
  strict: process.env.NODE_ENV !== 'production',
});

const types = {
  state: keymirror(state),
  getter: keymirror(getters),
  mutation: keymirror(mutations),
  action: keymirror(actions)
};

export const Types = types;
export const State = decorator(namespace(null, vState), types.state);
export const Getter = decorator(namespace(null, vGetter), types.getter);
export const Mutation = decorator(namespace(null, vMutation), types.mutation);
export const Action = decorator(namespace(null, vAction), types.action);
