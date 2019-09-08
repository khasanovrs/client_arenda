import {Component, OnInit} from '@angular/core';
import {GlobalPayList} from './global-pay-list';

@Component({
  selector: 'app-pay-list',
  templateUrl: './pay_list.component.html',
  styleUrls: ['./pay_list.scss']
})
export class PayListComponent implements OnInit {
  data: any = {
    data: {
      show: false,
      pay_list: {
        'date': '',
        'user_id': null,
        'sum': ''
      }
    }
  };

  constructor(private globalPayList: GlobalPayList) {
    this.data = globalPayList;
  }

  ngOnInit() {
  }

  clear() {
    this.data.data.show = false;
  }
}
