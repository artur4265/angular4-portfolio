import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

title = '';
avatar = '';
tascks: any[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];


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

  addTasck(newTasck: string) {
    if (newTasck) {
      this.tascks.push(newTasck);
    }
  }

  ngOnInit() {
    this.title = 'User Profile';
    this.avatar = 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/p160x160/17342777_400396710325485_6251911563858201114_n.jpg?oh=df6c62f636165b0cf7e77e1e5946c9be&oe=5A0B682B';

}






}
