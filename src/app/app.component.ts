import { Component } from '@angular/core';


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
  }

  chagne() {

    this.size = 210;
    this.level = 4;
    this.qrvalue = 'naim';

  }
}
