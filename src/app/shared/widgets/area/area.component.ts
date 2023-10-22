import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: any;

  Highcharts = Highcharts;

  constructor(){}

  ngOnInit(){
    this.chartOptions={
      chart: {
          type: 'area'
      },
      title: {
          text: 'Insight Report Graph',
          align: 'center'
      },
      subtitle: {
          text: 'Source: ' +
              '<a href="https://www.zetech.ac.ke/"' +
              'target="_blank">Zetech University</a>',
          align: 'left'
      },
      credits:{
        enabled: false
      },
      exporting:{
        enabled: true
      },
      yAxis: {
          title: {
              useHTML: true,
              text: 'Perfomance in %'
          }
      },
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      plotOptions: {
          series: {
              pointStart: 2012
          },
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'Postgraduate Programs',
          data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
      }, {
          name: 'Undergraduate Programs',
          data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]
  
      }, {
          name: 'Diploma Programs',
          data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
      }, {
          name: 'Certificate Programs',
          data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]
  
      }, {
        name: 'Deffered Programs',
          data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
      }]
  };
  
HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300)
  
  }



}
