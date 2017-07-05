import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbroad',
  templateUrl: './dashbroad.component.html',
  styleUrls: ['./dashbroad.component.css']
})
export class DashbroadComponent implements OnInit {


title = '';

  constructor() { }

  ngOnInit() {
    this.title = 'Dashbroad';
  }

}
