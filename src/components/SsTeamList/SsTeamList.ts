import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Team } from '../../../@types';
import { makeHeaders } from '../../helpers/index';
import { app } from '../../main';
import { TeamListAction } from '../../store/modules/index';

@Component({ template: require('./SsTeamList.pug') })
export class SsTeamList extends Vue {
  items: Team[] = [];
  headers = makeHeaders<Team>(Team, {
    actionList: [
      { name: 'show', onClick: (id: number) => app.$router.push(`/team/${id}`) }
    ]
  });

  @TeamListAction itemsGet;
  async mounted() {
    this.items = await this.itemsGet();
  }
}

