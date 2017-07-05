import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upgrate-to-pro',
  templateUrl: './upgrate-to-pro.component.html',
  styleUrls: ['./upgrate-to-pro.component.css']
})
export class UpgrateToProComponent implements OnInit {

title = '';

  constructor() { }

  ngOnInit() {
    this.title = 'Upgrate to Pro';
  }

}
