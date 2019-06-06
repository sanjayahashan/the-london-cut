import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import { Income } from 'src/app/shared/models/income.model';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import {Chart} from 'chart.js';

declare var demo: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../../../assets/css/material-dashboard.min.css'],
  providers: [DashboardService]
})
export class AdminComponent implements OnInit {
  incomeList:Income[];
  public c_amount = [];
  public labelss = [];
  public today = new Date();

  constructor(private dashBoardService: DashboardService) { }

  ngOnInit() {
    this.dashBoardService.getIncome().subscribe(res=>{
    this.incomeList=res as Income[];
  
    this.getAnalysis();

    
    });
  }

  getAnalysis(){
    for(var i=0;i<this.incomeList.length;i++){
      this.c_amount.push(this.incomeList[i].amount);
      this.labelss.push(this.incomeList[i].updatedAt.toString().substring(0,10));
    }

    var __amount = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: this.labelss,
        datasets: [
          {
            borderColor: "#1d7af3",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#1d7af3",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            backgroundColor: 'transparent',
            fill: true,
            borderWidth: 2,
            label: 'Daily Income',
            data: this.c_amount,
            
          }
        ]
      },
      
    })

  }

  


}
 


