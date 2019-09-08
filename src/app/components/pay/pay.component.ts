import {Component, OnInit} from '@angular/core';
import {GlobalParamsPay} from './global-params-pay';
import {ApplicationsService} from '../applications/applications.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {GlobalPayList} from '../pay_list/global-pay-list';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
})
export class PayComponent implements OnInit {
  data: any;

  constructor(private globalParamsPay: GlobalParamsPay,
              private applicationsService: ApplicationsService,
              private globalParamsMessage: GlobalParamsMessage,
              private globalPayList: GlobalPayList) {
    this.data = globalParamsPay;
  }

  ngOnInit() {
  }

  clear() {
    this.data.data = {show: false, sum: '', eq_id: null};
  }

  send() {
    this.data.data.show = false;
    if (this.data.data.eq_id !== null) {
      this.applicationsService.addPay({
        sum: this.globalParamsPay.data.sum,
        eq_app_id: this.globalParamsPay.data.eq_id
      }).then((data: any) => {
          this.globalPayList.data.pay_list = data.data;
          this.globalParamsMessage.data = {title: 'Оплата успешно добавлена', type: 'success', body: ''};
        },
        (error) => {
          console.log('Ошибка при добавлении нового платежа: ', error);
        });
    }
  }
}
