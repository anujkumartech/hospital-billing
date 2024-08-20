import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  Highcharts: typeof Highcharts = Highcharts; // Required
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Payments Overtime'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yAxis: {
      title: {
        text: 'Amount ($)'
      }
    },
    series: [
      {
        name: 'Payments',
        data: [1500, 3200, 2700, 4500, 5500, 4800, 6000],
        type: 'line',
        color: '#FF7F0E'
      }
    ],
    tooltip: {
      formatter: function () {
        return `<b>${this.series.name}</b><br/>${this.x}: $${this.y}`;
      }
    },
    credits: {
      enabled: false
    }
  };
}
