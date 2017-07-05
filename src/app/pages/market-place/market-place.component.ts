import { Component, OnInit } from '@angular/core';
import { ProgramListService } from './../program-list.service';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketPlaceComponent implements OnInit {

title = '';

  constructor(private newProgram: ProgramListService) {
   //id = this.newProgram.id;
  }


  programs = this.newProgram.programs;

  ngOnInit() {
    this.title = 'Market App';
    console.log(this.newProgram.onBuy());
  }

}
