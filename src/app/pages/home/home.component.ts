import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


type = 'line';
data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "My Second dataset",
      data: [65, 59, 80, 81],
      backgroundColor: '#d74750',
      borderColor: 'rgb(255, 99, 132)'
    }
  ]
};
options = {
  responsive: true,
  maintainAspectRatio: false
};



  constructor() { }

  ngOnInit() {

  }


  

}
