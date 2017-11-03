export const splinePreset: Highstock.Options = {
  chart: {
    type: 'spline'
  },
  xAxis: {
    type: 'datetime',
    title: {
      text: 'Date'
    }
  },
  tooltip: {
    headerFormat: '<b>{series.name}</b><br>',
    pointFormat: '{point.x:%e.%m.%Y}<br>{point.y:.2f}'
  },
  plotOptions: {
    spline: {
      marker: {
        enabled: true
      }
    }
  },
  series: []
};

export const columnPreset = {
  chart: {
    type: 'column'
  },

  xAxis: {
    type: 'category',
    labels: {
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  },
  yAxis: {
    title: {
      text: 'changes'
    }
  },
  legend: {
    enabled: false
  },
  series: []
};
