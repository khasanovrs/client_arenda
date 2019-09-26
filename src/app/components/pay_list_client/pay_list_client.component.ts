import {Component, OnInit} from '@angular/core';
import {GlobalPayListClient} from './global-pay-list-client';

@Component({
  selector: 'app-pay-list-client',
  templateUrl: './pay_list_client.component.html',
  styleUrls: ['./pay_list_client.scss']
})
export class PayListClientComponent implements OnInit {
  data: any = {
    data: {
      show: false,
      pay_list: {
        sum: '',
        date: '',
        equipments: '',
        cashBox: ''
      }
    }
  };

  constructor(private globalPayListClient: GlobalPayListClient) {
    this.data = globalPayListClient;
  }

  ngOnInit() {
  }

  clear() {
    this.data.data.show = false;
  }
}
