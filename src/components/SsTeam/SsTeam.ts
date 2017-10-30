import Vue from 'vue';
import { sumBy } from 'lodash-es';
import moment from 'moment';
import { Team } from '../../../@types/index';
import { splinePreset, columnPreset } from '../../helpers/chartPresets';
import { Watch, Component } from 'vue-property-decorator';
import { TeamGetter, TeamAction } from '../../store/modules/index';

@Component({ template: require('./SsTeam.pug') })
export class SsTeam extends Vue {
  item: Team = null;
  filter = {
    rangeLimits: null,
    showDateStart: false,
    showDateEnd: false,
    range: { start: null, end: null }
  };
  selectedProperty: string = null;
  growingByTeam: number = null;

  chartOptions: Highstock.Options = { ...splinePreset, title: { text: 'График измерений спортсменов команды' } };
  chartGrowingOptions: Highstock.Options = { ...columnPreset, title: { text: 'График роста спортсменов' } };

  @TeamGetter propertyList;
  @TeamGetter('filterDateLimits') teamMeasurementFilterDateLimits;
  @TeamGetter seriesByProperty;
  @TeamGetter seriesGrowingByProperty;

  @Watch('selectedProperty')
  @Watch('filter.range.start')
  @Watch('filter.range.end')
  onFilterChange() {
    if (!this.selectedProperty) return;
    this.chartOptions.series = this.seriesByProperty(this.selectedProperty, this.filter.range);
    this.chartGrowingOptions.series = this.seriesGrowingByProperty(this.selectedProperty, this.filter.range);

    this.growingByTeam = sumBy(this.chartGrowingOptions.series[0].data, item => item[1]) / this.chartGrowingOptions.series[0].data.length;
  }

  @TeamAction itemGet;

  async mounted() {
    this.item = await this.itemGet(parseInt(this.$route.params.id));
    this.filter.rangeLimits = this.teamMeasurementFilterDateLimits;
    if (this.filter.rangeLimits.start) {
      this.filter.range.start = moment(this.filter.rangeLimits.start).format('YYYY-MM-DD');
      this.filter.range.end = moment(this.filter.rangeLimits.end).format('YYYY-MM-DD');
    }
  }
}

