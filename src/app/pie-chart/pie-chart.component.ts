import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  Highcharts: typeof Highcharts = Highcharts; // Required
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: '',
      align: 'left',
      verticalAlign: 'middle',
      y: 20,
      style: {
        fontSize: '18px',
        fontWeight: 'bold'
      }
    },
    plotOptions: {
      pie: {
        innerSize: '70%', // Adjusts the donut size
        dataLabels: {
          enabled: true,
          distance: -30,
          style: {
            fontWeight: 'bold',
            fontSize: '16px',
            color: 'white'
          },
          format: '{point.percentage:.1f} %'
        },
        showInLegend: true
      }
    },
    series: [
      {
        name: 'Billing',
        data: [
          { name: 'Paid', y: 70, color: '#FF7F0E' },
          { name: 'Pending', y: 30, color: '#FFBB78' }
        ],
        type: 'pie'
      }
    ],
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
      itemStyle: {
        fontSize: '14px',
        fontWeight: 'bold'
      }
    },
    credits: {
      enabled: false
    }
  };
}