import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Team } from '../../../@Types';
import { dTeamItemsGet } from '../../store/modules/teamList/index';
import { makeHeaders } from '../../helpers/index';
import { app } from '../../main';

@Component({ template: require('./SsTeamList.pug') })
export class SsTeamList extends Vue {
  items: Team[] = [];
  headers = makeHeaders<Team>(Team, {
    actionList: [
      { name: 'show', onClick: (id: number) => app.$router.push(`/team/${id}`) }
    ]
  });

  async mounted() {
    this.items = await dTeamItemsGet(this.$store);
  }
}

