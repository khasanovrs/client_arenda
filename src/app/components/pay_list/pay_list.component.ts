import {Component, OnInit} from '@angular/core';
import {GlobalPayList} from './global-pay-list';

@Component({
  selector: 'app-pay-list',
  templateUrl: './pay_list.component.html',
  styleUrls: ['./pay_list.scss']
})
export class PayListComponent implements OnInit {
  data: any;

  constructor(private globalPayList: GlobalPayList) {
    this.data = globalPayList;

    console.log(1,this.data);
  }

  ngOnInit() {
  }

  clear() {
    this.data.data.client_id = null;
    this.data.data.id_equipments = null;
    this.data.data.pay_list = {};
  }
}
