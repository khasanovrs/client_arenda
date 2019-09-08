import {Component} from '@angular/core';
import {HireService} from './hire.service';
import {Router} from '@angular/router';
import {DopParamsService} from '../../services/dopParams.service';
import {GlobalParamsRental} from '../rental/global-params-rental';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
})
export class HireComponent {
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
  };

  // список прокатов
  hires: InterFaceHire[] = [];

  constructor(public hireService: HireService,
              private router: Router,
              private dopParamsService: DopParamsService,
              private globalParamsRental: GlobalParamsRental) {
    this.hireService.getHireStatus().then((data: InterFaceDopParamsColor[]) => {
        this.statusList = data;
      },
      (error) => {
        console.log('Ошибка при получении статусов: ', error);
      });

    this.hireService.getHireFields().then((data: InterFaceActiveFields[]) => {
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

  // изменение статуса
  changeStatus(hire) {
    this.hireService.updateHireStatus({
      id: hire.id,
      status: hire.status
    }).then(() => {
        for (const value of this.statusList) {
          if (value.val === hire.status) {
            hire.color = value.color;
          }
        }
      },
      (error) => {
        console.log('Ошибка при изменении статуса у проката: ', error);
      });
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
    };

    this.getHire();
  }

  hireDetails(id) {
    this.router.navigate(['/hire/' + id]);
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
    }).then((data: InterFaceHire[]) => {
        this.hires = data;

        this.showFilters = false;
      },
      (error) => {
        console.log('Ошибка при получении списка прокатов: ', error);
      });
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
}
