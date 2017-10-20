import Vue from 'vue';
import { sumBy } from 'lodash-es';
import moment from 'moment';
import { Team } from '../../../@Types/index';
import { dTeamGet, gTeamPropertyList, gTeamSeriesPropertyGrowing, gTeamMeasurementFilterDateLimits, gTeamSeriesByProperty } from '../../store/modules/index';
import { splinePreset, columnPreset } from '../../helpers/chartPresets';
import { Watch, Component } from 'vue-property-decorator';

@Component({ template: require('./SsTeam.pug') })
export class SsTeam extends Vue {
  item: Team = null;
  filterData = {
    rangeLimits: null,
    showDateStart: false,
    showDateEnd: false
  };
  filter = {
    range: { start: null, end: null }
  };
  selectedProperty: string = null;
  propertyList: string[] = null;
  growingByTeam: number = null;

  chartOptions: Highstock.Options = { ...splinePreset, title: { text: 'График измерений спортсменов команды' } };
  chartGrowingOptions: Highstock.Options = { ...columnPreset, title: { text: 'График роста спортсменов' } };

  @Watch('selectedProperty')
  @Watch('filter.range.start')
  @Watch('filter.range.end')
  onFilterChange() {
    if (!this.selectedProperty) return;
    this.chartOptions.series = gTeamSeriesByProperty(this.$store)(this.selectedProperty, this.filter.range);
    this.chartGrowingOptions.series = gTeamSeriesPropertyGrowing(this.$store)(this.selectedProperty, this.filter.range);

    this.growingByTeam = sumBy(this.chartGrowingOptions.series[0].data, item => item[1]) / this.chartGrowingOptions.series[0].data.length;
  }

  async mounted() {
    this.item = await dTeamGet(this.$store, parseInt(this.$route.params.id));
    this.propertyList = gTeamPropertyList(this.$store);
    this.filterData.rangeLimits = gTeamMeasurementFilterDateLimits(this.$store);
    if (this.filterData.rangeLimits.start) {
      this.filter.range.start = moment(this.filterData.rangeLimits.start).format('YYYY-MM-DD');
      this.filter.range.end = moment(this.filterData.rangeLimits.end).format('YYYY-MM-DD');
    }
  }
}

