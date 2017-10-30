import { Team } from '../../../../@types';
import { IndividualSeriesOptions } from 'highcharts';

export interface TeamStoreState {
  item: Team;
  seriesByProperty: {[prop: string]: IndividualSeriesOptions[]};
}
