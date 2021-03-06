import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Chart } from '../models/chart.model';
import { Router } from '@angular/router';
import { ChartService } from '../chart.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.css'],
  providers: [ChartService]
})

export class ChartListComponent implements OnInit {

  charts: FirebaseListObservable<any[]>;

  currentRoute: string = this.router.url;

  constructor(private router: Router, private chartService: ChartService) { }

  ngOnInit(){
    this.charts = this.chartService.getCharts();
  }

goToDetailPage(clickedChart: Chart) {
     this.router.navigate(['charts', clickedChart.$key]);
   };



}
