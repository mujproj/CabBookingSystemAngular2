import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  backgroundimage = {'background-image': 'url("https://image.shutterstock.com/image-vector/online-ordering-taxi-car-rent-600w-1490648672.jpg")'};
  ngOnInit(): void {
  }

}
