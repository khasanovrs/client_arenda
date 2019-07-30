import {Component, OnInit} from '@angular/core';
import {FinanceService} from './finance.service';
import {Router} from '@angular/router';
import {DopParamsService} from '../../services/dopParams.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
})
export class FinanceComponent implements OnInit {
  p = 1;
// отображение фильтра
  showFilters = false;
  // отображение фильтра
  showActiveFields = false;
  // список активных полей
  activeFields: InterFaceActiveFields[] = [];
  // список активных полей
  activeFieldsTables = {};
  financeCategory: InterFaceDopParams[] = [];
  financeType: InterFaceDopParams[] = [];
  branches: InterFaceDopParams[] = [];
  financeCashBox: InterFaceFinanceCashBox[] = [];
  // список финансов
  financeList: InterFaceFinance[] = [];
  // список финансов
  operationSum: InterFaceFinanceSum = {rate: [], income: []};
  // сумма всех финансов
  allSum = '0';
  // сумма дохода
  income_sum = '';
  // сумма расхода
  rate_sum = '';

  // фильтр
  filters: InterFaceFinanceFilter = {
    like: '',
    category: null,
    cashBox: null,
    type: null,
    sum_start: '',
    sum_end: '',
    date_start: '',
    date_end: '',
    branch: null
  };

  constructor(private financeService: FinanceService,
              private dopParamsService: DopParamsService,
              private router: Router) {
  }

  ngOnInit() {
    this.financeService.getActiveFields().then((data: InterFaceActiveFields[]) => {
        this.activeFields = data;

        this.changeShowFields();
      },
      (error) => {
        console.log('Ошибка при получении источников: ', error);
      });

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
        this.allSum = String(this.financeCashBox.reduce(function (sum, val) {
          return sum + +(val.sum);
        }, 0));
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

    this.getFinance();
  }

  financeDetails(finance_id) {
    this.router.navigate(['/finance/' + finance_id]);
  }

  // отображение фильтра
  changeShowFilters() {
    this.showFilters = !this.showFilters;
  }

  // отображение активных полей
  changeActiveFields() {
    this.showActiveFields = !this.showActiveFields;
  }

  // изменение прав у нового пользователя
  changeCheckbox(i) {
    this.activeFields[i].flag = this.activeFields[i].flag === 0 ? 1 : 0;
    this.changeShowFields();
  }

  // изменение списка активных полей
  changeFields() {
    this.financeService.changeFields({data: this.activeFields}).then(() => {
      },
      () => {
        console.log('Ошибка при изменение списка отображаемых полей');
      });

    this.showActiveFields = !this.showActiveFields;
  }

  // изменение отображений записей у полей
  changeShowFields() {
    for (const value of this.activeFields) {
      this.activeFieldsTables[value.code] = value.flag;
    }
  }

  // изменение статуса
  changeStatus(finance) {
    this.financeService.updateStatusFinance({finance_id: finance.id, finance_category: finance.category_id}).then(() => {
      },
      (error) => {
        console.log('Ошибка при изменении статуса у финансов: ', error);
      });
  }

  // очистка фильтра
  clearFilters() {
    this.filters = {
      like: '',
      category: null,
      cashBox: 1,
      type: null,
      sum_start: '',
      sum_end: '',
      date_start: '',
      date_end: '',
      branch: null
    };

    this.getFinance();
  }

  // установка кассы
  setCashBox(id) {
    this.filters.cashBox = id;

    this.getFinance();
  }

  getFinance() {
    this.financeService.getFinance({
      like: this.filters.like,
      category: this.filters.category,
      cashBox: this.filters.cashBox,
      type: this.filters.type,
      sum_start: this.filters.sum_start,
      sum_end: this.filters.sum_end,
      date_start: this.filters.date_start,
      date_end: this.filters.date_end,
      branch: this.filters.branch
    }).then((data: any) => {
        this.financeList = data.list;
        this.operationSum = data.sum;
        this.income_sum = '';
        this.rate_sum = '';

        this.showFilters = false;
      },
      (error) => {
        console.log('Ошибка при получении списка финансов: ', error);
      });
  }
}
