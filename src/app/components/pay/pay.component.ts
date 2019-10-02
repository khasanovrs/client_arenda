import {Component, OnInit} from '@angular/core';
import {GlobalParamsPay} from './global-params-pay';
import {ApplicationsService} from '../applications/applications.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {GlobalPayList} from '../pay_list/global-pay-list';
import {FinanceService} from '../finance/finance.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
})
export class PayComponent implements OnInit {
  data = {
    data: {
      show: false,
      sum: '',
      cashBox: null,
      eq_id: null
    }
  };
  financeCashBox: InterFaceFinanceCashBox[];
  revertSum = false;

  constructor(private globalParamsPay: GlobalParamsPay,
              private applicationsService: ApplicationsService,
              private globalParamsMessage: GlobalParamsMessage,
              private globalPayList: GlobalPayList,
              private financeService: FinanceService) {
    this.data = globalParamsPay;
  }

  ngOnInit() {
    this.financeService.getFinanceCashBOx().then((data: InterFaceFinanceCashBox[]) => {
        this.financeCashBox = data;
      },
      (error) => {
        console.log('Ошибка при получении касс: ', error);
      });
  }

  clear() {
    this.data.data = {show: false, sum: '', eq_id: null, cashBox: null};
  }

  send() {
    if (this.globalParamsPay.data.sum === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать сумма', type: 'error', body: ''};
      return false;
    }

    if (this.globalParamsPay.data.cashBox === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать кассу', type: 'error', body: ''};
      return false;
    }

    this.data.data.show = false;
    if (this.data.data.eq_id !== null) {
      this.applicationsService.addPay({
        sum: this.globalParamsPay.data.sum,
        cashBox: this.globalParamsPay.data.cashBox,
        eq_app_id: this.globalParamsPay.data.eq_id,
        revertSum: this.revertSum
      }).then(() => {
          this.globalParamsMessage.data = {title: 'Оплата успешно добавлена', type: 'success', body: ''};
        },
        (error) => {
          console.log('Ошибка при добавлении нового платежа: ', error);
        });
    }
  }
}
