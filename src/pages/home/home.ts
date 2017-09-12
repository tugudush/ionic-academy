import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  
  constructor(public navCtrl: NavController) {

  }

  page_title = "Home";
  greetings = "Hello World";

  a = "4";
  b = "6";
  result = 0;

  getText() {
    return this.greetings;
  }

  calculate() {
    this.result = parseInt(this.a) + parseInt(this.b);
  }

  myArray = ['this', 'is', 'my', 'first', 'ngFor'];
}
