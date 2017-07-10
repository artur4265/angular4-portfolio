import { Component, OnInit } from '@angular/core';
import { Apps, programsMainData } from './../app-data.model';

@Component({
  selector: 'app-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.css']
})
export class AddAppComponent implements OnInit {

title = '';
programsMainData = programsMainData;
test = [];
  constructor() { }

  ngOnInit() {
    let newApp = new Apps('5', 'test', 'test', 'test', 'test', 'test', 'test');
    this.title = 'Add App';
    console.log(newApp);
    console.log(programsMainData);

    this.test = this.programsMainData.concat(newApp);
    console.log(this.test);

  }

}
