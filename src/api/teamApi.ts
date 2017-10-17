import axios from 'axios';
import { CommonApi } from './_base';
import { Team } from '../../@Types';

class TeamApi extends CommonApi<Team> {
  constructor() {
    super('team');
  }
}

export const teamApi = new TeamApi();
