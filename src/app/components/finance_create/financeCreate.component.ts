import {Component, OnInit} from '@angular/core';
import {FinanceService} from '../finance/finance.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {Router} from '@angular/router';
import {DopParamsService} from '../../services/dopParams.service';

@Component({
  selector: 'app-finance-create',
  templateUrl: './financeCreate.component.html',
})
export class FinanceCreateComponent implements OnInit {
  financeCategory: InterFaceDopParams[] = [];
  financeType: InterFaceDopParams[] = [];
  branches: InterFaceDopParams[] = [];
  financeCashBox: InterFaceFinanceCashBox[] = [];
  finance: InterFaceNewFinance = {
    name: '',
    category: null,
    type: null,
    sum: '',
    cashBox: null,
    branch: null
  };

  constructor(private financeService: FinanceService,
              private globalParamsMessage: GlobalParamsMessage,
              private dopParamsService: DopParamsService,
              private router: Router) {
  }

  ngOnInit() {
    this.financeService.getFinanceCategory().then((data: InterFaceDopParams[]) => {
        this.financeCategory = data;
      },
      (error) => {
        console.log('Ошибка при получении категорий: ', error);
      });

    this.financeService.getFinanceType().then((data: InterFaceDopParams[]) => {
        this.financeType = data;
      },
      (error) => {
        console.log('Ошибка при получении типов: ', error);
      });

    this.financeService.getFinanceCashBOx().then((data: InterFaceFinanceCashBox[]) => {
        this.financeCashBox = data;
      },
      (error) => {
        console.log('Ошибка при получении касс: ', error);
      });

    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branches = data;
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });
  }

  // добавление финансов
  addFinance() {
    if (this.finance.name === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать назначение', type: 'error', body: ''};
      return false;
    }

    if (this.finance.category === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать категорию', type: 'error', body: ''};
      return false;
    }

    if (this.finance.type === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать тип', type: 'error', body: ''};
      return false;
    }

    if (this.finance.sum === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать сумму', type: 'error', body: ''};
      return false;
    }

    if (this.finance.cashBox === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать кассу', type: 'error', body: ''};
      return false;
    }

    if (this.finance.branch === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать филиал', type: 'error', body: ''};
      return false;
    }


    this.financeService.addFinance({
      id: '',
      name: this.finance.name,
      category: this.finance.category,
      type: this.finance.type,
      sum: this.finance.sum,
      cashBox: this.finance.cashBox,
      branch: this.finance.branch
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Заявка успешно добавлена', type: 'success', body: ''};
        this.router.navigate(['/finance']);
      },
      (error) => {
        console.log('Ошибка при добавлении новой записи: ', error);
      });
  }
}
