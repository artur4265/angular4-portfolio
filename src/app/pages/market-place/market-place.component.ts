import { Component, OnInit } from '@angular/core';
import { ProgramListService } from './../program-list.service';
import { Apps, programsMainData } from './../app-data.model';
import { FilterPipe } from './../../filter.pipe';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketPlaceComponent implements OnInit {

title = '';
programs = [];
programsMainData = programsMainData;

  constructor(private newProgram: ProgramListService) {}

  ngOnInit() {
    this.programs = programsMainData;
    this.title = 'Market App';
    console.log(this.newProgram.onBuy());
  }

}
