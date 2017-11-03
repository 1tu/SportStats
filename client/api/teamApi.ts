import axios from 'axios';
import { CommonApi } from './_base';
import { Team } from '../../@types';

class TeamApi extends CommonApi<Team> {
  constructor() {
    super('team');
  }
}

export const teamApi = new TeamApi();
