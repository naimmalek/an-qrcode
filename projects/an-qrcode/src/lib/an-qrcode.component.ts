import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import {doqr} from '../../../../src/assets/index.js'


@Component({
  selector: 'qrcode',
  template: `<img src="{{result}}">`,
  styles: []
})
export class AnQrcodeComponent implements OnInit {

  @Input() level: any = 1;
  @Input() qrvalue: any = "Test";
  @Input() size: any = 200;
  result:any=null;
  constructor() { }

  ngOnInit() {
    this.result = doqr(this.level, this.qrvalue, this.size, this.size);
  }

  ngOnChanges(changes: SimpleChanges) {
    const qrvalue: SimpleChange = changes.qrvalue;
    const level: SimpleChange = changes.level;
    const size: SimpleChange = changes.size;
    this.result = doqr(this.level, this.qrvalue, this.size, this.size);
  }

}
