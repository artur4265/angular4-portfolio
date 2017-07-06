import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Apps, programsMainData } from './../app-data.model';


@Component({
  selector: 'app-detail-app',
  templateUrl: './detail-app.component.html',
  styleUrls: ['./detail-app.component.css']
})
export class DetailAppComponent implements OnInit {

programsMainData = programsMainData;
programs = [];
appId = '';
app: null;


type = 'doughnut';
data = {
  labels: ["Downloads", "Watchs", "Likes", "Shares"],
  datasets: [
    {
      label: "Downloads in 2017",
      data: [65, 59, 80, 81],
      backgroundColor: '#d74750',
      borderColor: '#e4e4e5'
    }
  ]
};
options = {
  responsive: true,
  maintainAspectRatio: false
};


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    this.programs = programsMainData;
    this.appId = this.route.snapshot.params.id;
    this.app = this.programs[this.appId];

  }

}
