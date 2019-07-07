import {Component, OnInit} from '@angular/core';
import {FinanceService} from './finance.service';

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
  financeCashBox: InterFaceFinanceCashBox[] = [];
  // список финансов
  financeList: InterFaceFinance[] = [];
  // сумма всех финансов
  allSum = '0';

  // фильтр
  filters: InterFaceFinanceFilter = {
    like: '',
    category: null,
    cashBox: null,
    type: null,
    sum_start: '',
    sum_end: '',
    date_start: '',
    date_end: ''
  };

  constructor(private financeService: FinanceService) {
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

    this.getFinance();
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
      date_end: ''
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
      date_end: this.filters.date_end
    }).then((data: InterFaceFinance[]) => {
        console.log(1, data);
        this.financeList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка финансов: ', error);
      });
  }
}
