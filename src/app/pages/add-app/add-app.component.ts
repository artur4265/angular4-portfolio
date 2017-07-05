import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.css']
})
export class AddAppComponent implements OnInit {

title = '';

  constructor() { }

  ngOnInit() {
    this.title = 'Add App';
  }

}
