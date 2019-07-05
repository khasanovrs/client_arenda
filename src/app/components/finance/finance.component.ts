import {Component, OnInit} from '@angular/core';
import {FinanceService} from './finance.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
})
export class FinanceComponent implements OnInit {
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

  // фильтр
  filters: InterFaceFinance = {
    like: '',
    category: null,
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

  // изменение отображений записекй у полей
  changeShowFields() {
    for (const value of this.activeFields) {
      this.activeFieldsTables[value.code] = value.flag;
    }
  }


  getFinance() {

  }
}
