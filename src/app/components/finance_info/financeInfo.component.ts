import {Component, OnInit} from '@angular/core';
import {FinanceService} from '../finance/finance.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DopParamsService} from '../../services/dopParams.service';

@Component({
  selector: 'app-finance-info',
  templateUrl: './financeInfo.component.html',
})
export class FinanceInfoComponent implements OnInit {
  financeCategory: InterFaceDopParams[] = [];
  financeType: InterFaceDopParams[] = [];
  branches: InterFaceDopParams[] = [];
  financeCashBox: InterFaceFinanceCashBox[] = [];
  // идентификатор финансов
  financeId: null;
  finance: InterFaceFinanceInfo = {
    id: '',
    name: '',
    category: null,
    payer_id: null,
    type: null,
    date: '',
    payer: null,
    sum: '',
    cashBox: null,
    branch: null
  };

  constructor(private financeService: FinanceService,
              private globalParamsMessage: GlobalParamsMessage,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private dopParamsService: DopParamsService) {

    this.activatedRoute.params.subscribe(
      (params: Params): void => {
        this.financeId = params.id;
      }
    );
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

    this.financeService.getFinanceInfo({financeId: this.financeId}).then((data: InterFaceFinanceInfo) => {
        this.finance = data;
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по записи: ', error);
      });

    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branches = data;
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });
  }

  // обновление финансов
  updateFinance() {
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

    if (this.finance.date === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать дату', type: 'error', body: ''};
      return false;
    }

    if (this.finance.payer === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать плательщика', type: 'error', body: ''};
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
      id: this.finance.id,
      name: this.finance.name,
      category: this.finance.category,
      type: this.finance.type,
      date: this.finance.date,
      payer: this.finance.payer_id,
      sum: this.finance.sum,
      cashBox: this.finance.cashBox,
      branch: this.finance.branch
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Заявка успешно обновлена', type: 'success', body: ''};
        this.router.navigate(['/finance']);
      },
      (error) => {
        console.log('Ошибка при обновлении записи: ', error);
      });
  }
}
