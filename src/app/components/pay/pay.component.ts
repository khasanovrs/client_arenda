import {Component, OnInit} from '@angular/core';
import {GlobalParamsPay} from './global-params-pay';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
})
export class PayComponent implements OnInit {
  data: any;

  constructor(private globalParamsPay: GlobalParamsPay) {
    this.data = globalParamsPay;
  }

  ngOnInit() {
  }

  clear() {
    this.data.data = {show: false, sum: ''};
  }

  send() {
    this.data.data.show = false;
  }
}
