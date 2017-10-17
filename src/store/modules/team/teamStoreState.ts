import { Team } from '../../../../@Types';
import { IndividualSeriesOptions } from 'highcharts';

export interface TeamState {
  item: Team;
  seriesByProperty: {[prop: string]: IndividualSeriesOptions[]};
}
