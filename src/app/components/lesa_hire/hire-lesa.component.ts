import {Component} from '@angular/core';
import {HireService} from './../hire/hire.service';
import {Router} from '@angular/router';
import {DopParamsService} from '../../services/dopParams.service';
import {GlobalParamsRental} from '../rental/global-params-rental';
import {Sort} from '@angular/material/sort';
import {ApplicationsService} from '../applications/applications.service';

@Component({
  selector: 'app-hire-lesa',
  templateUrl: './../hire/hire.component.html',
})
export class HireLesaComponent {
  p = 1;
  statusList: InterFaceDopParamsColor[] = [];
  // отображение фильтра
  showFilters = false;
  // отображение фильтра
  showActiveFields = false;
  // список активных полей
  activeFields: InterFaceActiveFields[] = [];
  // список активных полей
  activeFieldsTables = {};
  branches: InterFaceDopParams[] = [];

  filters = {
    like: '',
    status: '',
    branch: null,
    date_start: '',
    date_end: '',
    sum_start: '',
    sum_end: '',
    show_close_hire: '0'
  };

  closeHireOption = [
    {val: '0', name: 'Скрыть'},
    {val: '1', name: 'Показать'},
  ];

  // список прокатов
  hires: InterFaceHire[] = [];

  sortedData: InterFaceHire[];

  constructor(public hireService: HireService,
              private router: Router,
              private dopParamsService: DopParamsService,
              private applicationsService: ApplicationsService,
              private globalParamsRental: GlobalParamsRental) {
    this.hireService.getHireLesaFields().then((data: InterFaceActiveFields[]) => {
        this.activeFields = data;

        this.changeShowFields();
      },
      (error) => {
        console.log('Ошибка при получении списка полей проката: ', error);
      });

    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branches = data;
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });

    this.applicationsService.refreshInfo.subscribe(() => {
      this.getHire();
    });

    this.getHire();
  }

  // отображение фильтра
  changeShowFilters() {
    this.showFilters = !this.showFilters;
  }

  // отображение фильтра
  changeActiveFields() {
    this.showActiveFields = !this.showActiveFields;
  }

  // изменение отображений записекй у полей
  changeShowFields() {
    for (const value of this.activeFields) {
      this.activeFieldsTables[value.code] = value.flag;
    }
  }

  // изменение списка активных полей
  changeFields() {
    this.hireService.changeFields({data: this.activeFields}).then(() => {
        this.showActiveFields = false;
      },
      () => {
        console.log('Ошибка при изменение списка отображаемых полей');
      });
  }

  // изменение списка полей
  changeCheckbox(i) {
    this.activeFields[i].flag = this.activeFields[i].flag === 0 ? 1 : 0;
    this.changeShowFields();
  }

  changeFilterStatus(val) {
    this.filters.status = val;
    this.getHire();
  }

  // очистка фильтра
  clearFilter() {
    this.filters = {
      like: '',
      status: '',
      branch: null,
      date_start: '',
      date_end: '',
      sum_start: '',
      sum_end: '',
      show_close_hire: '0'
    };

    this.getHire();
  }

  hireDetails(id) {
    this.router.navigate(['/hire/' + id]);
  }

  cronStart() {
    this.hireService.startCron().then(() => {
        this.getHire();
      },
      (error) => {
        console.log('Ошибка при запуске крона: ', error);
      });
  }

  getHire() {
    this.hireService.getHire({
      status: this.filters.status,
      like: this.filters.like,
      branch: this.filters.branch,
      date_start: this.filters.date_start,
      date_end: this.filters.date_end,
      sum_start: this.filters.sum_start,
      sum_end: this.filters.sum_end,
      show_close_hire: this.filters.show_close_hire,
      lesa: true
    }).then((data: InterFaceHire[]) => {
        this.hires = data;
        this.sortedData = this.hires.slice();
        this.showFilters = false;
      },
      (error) => {
        console.log('Ошибка при получении списка прокатов: ', error);
      });
  }

  // вывод телефона при наведении
  mouseEnter(value) {
    const country = value.substr(0, 1);
    const city = value.substr(1, 3);
    const number = value.substr(4, 3);
    const number2 = value.substr(7, 2);
    const number3 = value.substr(9, 2);

    return `Телефон : ${country}(${city})-${number}-${number2}-${number3}`;
  }

  showInsertRental(app_eq_id, app_id, typeLease_id, rent_end) {
    this.globalParamsRental.data = {
      show: true,
      date_end: rent_end,
      type_lease: typeLease_id,
      app_eq_id: app_eq_id,
      app_id: app_id
    };
  }

  sortData(sort: Sort) {
    const data = this.hires.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.hires = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'client':
          return compare(a.client, b.client, isAsc);
        case 'equipment':
          return compare(a.equipment, b.equipment, isAsc);
        case 'start_hire':
          return compare(a.start_hire, b.start_hire, isAsc);
        case 'end_hire':
          return compare(a.end_hire, b.end_hire, isAsc);
        case 'state':
          return compare(a.state, b.state, isAsc);
        case 'sum':
          return compare(a.sum, b.sum, isAsc);
        case 'sale_sum':
          return compare(a.sale_sum, b.sale_sum, isAsc);
        case 'total_paid':
          return compare(a.total_paid, b.total_paid, isAsc);
        case 'remainder':
          return compare(a.remainder, b.remainder, isAsc);
        case 'date_create':
          return compare(a.date_create, b.date_create, isAsc);
        case 'current_pay':
          return compare(a.current_pay, b.current_pay, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
