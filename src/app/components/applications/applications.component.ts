import {Component, OnInit} from '@angular/core';
import {ApplicationsService} from './applications.service';
import {DopParamsService} from '../../services/dopParams.service';
import {Router} from '@angular/router';
import {ApplicationsCreateService} from '../applications-create/applicationsCreate.service';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
})
export class ApplicationsComponent implements OnInit {
  p = 1;
  deliveryStatus: InterFaceDopParamsColor[] = [];
  // отображение фильтра
  showFilters = false;
  // отображение фильтра
  showActiveFields = false;
  // список активных полей
  activeFields: InterFaceActiveFields[] = [];
  // список активных полей
  activeFieldsTables = {};
  applicationsSource: InterFaceDopParams[] = [];
  branches: InterFaceDopParams[] = [];

  filters = {
    source: '',
    status: '',
    branch: null,
    date_start: '',
    date_end: '',
  };

  applications: InterFaceApplications[] = [];

  sortedData: InterFaceApplications[];

  ngOnInit() {
    this.applicationsService.getApplicationsStatus().then((data: InterFaceDopParamsColor[]) => {
        this.deliveryStatus = data;
      },
      (error) => {
        console.log('Ошибка при получении статусов: ', error);
      });

    this.applicationsCreateService.getApplicationsSource().then((data: InterFaceDopParams[]) => {
        this.applicationsSource = data;
      },
      (error) => {
        console.log('Ошибка при получении источников: ', error);
      });

    this.applicationsService.getApplicationsFields().then((data: InterFaceActiveFields[]) => {
        this.activeFields = data;

        this.changeShowFields();
      },
      (error) => {
        console.log('Ошибка при получении списка полей заявки: ', error);
      });

    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branches = data;
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });

    this.getApplication();
  }

  constructor(private applicationsService: ApplicationsService,
              private dopParamsService: DopParamsService,
              private router: Router,
              private applicationsCreateService: ApplicationsCreateService) {
  }

  // изменение типа источников
  changeTypeApplications(data) {
    this.filters.source = data;
    this.getApplication();
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
    this.applicationsService.changeFields({data: this.activeFields}).then(() => {
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
  changeStatus(application) {
    this.applicationsService.updateApplicationsStatus({
      application_id: application.equipments_id,
      application_status: application.status
    }).then(() => {
        for (const value of this.deliveryStatus) {
          if (value.val === application.status) {
            application.color = value.color;
          }
        }
      },
      (error) => {
        console.log('Ошибка при изменении статуса у оборудования: ', error);
      });
  }

  getApplication() {
    this.applicationsService.getApplication({
      status: this.filters.status,
      source: this.filters.source,
      branch: this.filters.branch,
      date_start: this.filters.date_start,
      date_end: this.filters.date_end,
    }).then((data: InterFaceApplications[]) => {
        this.sortedData = this.applications.slice();
        this.applications = data;
      },
      (error) => {
        console.log('Ошибка при получении списка заявок: ', error);
      });
  }

  // очистка фильтра
  clearFilter() {
    this.filters = {
      source: '',
      status: '',
      branch: null,
      date_start: '',
      date_end: '',
    };

    this.getApplication();
  }

  applicationDetails(equipments_id) {
    this.router.navigate(['/application/' + equipments_id]);
  }

  sortData(sort: Sort) {
    const data = this.applications.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.applications = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'client':
          return compare(a.client, b.client, isAsc);
        case 'phone':
          return compare(a.phone, b.phone, isAsc);
        case 'equipments_name':
          return compare(a.equipments_name, b.equipments_name, isAsc);
        case 'source':
          return compare(a.source, b.source, isAsc);
        case 'user':
          return compare(a.user, b.user, isAsc);
        case 'equipments_count':
          return compare(a.equipments_count, b.equipments_count, isAsc);
        case 'date_create':
          const date_create_a = new Date(a.date_create).getTime();
          const date_create_b = new Date(b.date_create).getTime();
          return compare(date_create_a, date_create_b, isAsc);
        case 'branch':
          return compare(a.branch, b.branch, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: Date | number | string, b: Date | number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
