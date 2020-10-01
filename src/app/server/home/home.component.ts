import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeId  = 10;
  name = 'Noel';
  address = 'Kochi';
  addButton = false;
  message = 'Button clicked';
  home = '';
  username = '';
  status = false ;

  getAddress() {
    return this.address + this.home;
  }

  constructor() {
    setTimeout( () => {this.addButton = true; }, 2000);
  }
  ngOnInit(): void {
  }
  onClick() {
    this.message = 'message activated ' + this.home;
  }

  onAddAddress(event: Event) {
    this.home = (<HTMLInputElement>event.target).value;
  }

  onUser() {
   this.status = true;
   return 'Succesful';
    }

  getColor() {
    return this.status === true ? 'green' : 'red' ;
  }

}
