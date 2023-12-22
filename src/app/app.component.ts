import { Component } from '@angular/core';
import { naim } from './n';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NQRCode';
  size = 200;
  level = 1;
  qrvalue = 'test';
  constructor() {
    let rr = naim();
    console.log("rr", rr)
  }

  chagne() {

    this.size = 210;
    this.level = 4;
    this.qrvalue = 'naim';

  }
}
