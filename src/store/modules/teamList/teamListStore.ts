import { ActionContext, Store, Module } from 'vuex';
import { TeamListState } from './TeamListStoreState';
import { getStoreAccessors } from 'vuex-typescript';
import { State as RootState } from '../../index';
import { Team } from '../../../../@Types';
import { teamApi } from '../../../api/teamApi';

type TeamContext = ActionContext<TeamListState, RootState>;

export const teamList = {
  namespaced: true,
  state: {
    items: [],
  },

  getters: {
    itemById(state: TeamListState) {
      return (id: number) => state.items.filter((item) => item.id === id)[0];
    }
  },

  mutations: {
    items(state: TeamListState, items: Team[]) {
      state.items = items;
    }
  },

  actions: {
    async itemsGet(context: TeamContext): Promise<Team[]> {
      if (context.state.items.length) {
        return context.state.items;
      }
      const items = await teamApi.index();
      sTeamItems(context, items);
      return context.state.items;
    },
  },
};

const { commit, read, dispatch } = getStoreAccessors<TeamListState, RootState>('teamList');

const getters = teamList.getters;
export const gTeamItemById = read(getters.itemById);

const actions = teamList.actions;
export const dTeamItemsGet = dispatch(actions.itemsGet);

const mutations = teamList.mutations;
export const sTeamItems = commit(mutations.items);
