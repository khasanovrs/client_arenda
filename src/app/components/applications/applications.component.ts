import {Component, OnInit} from '@angular/core';
import {ApplicationsService} from './applications.service';
import {DopParamsService} from '../../services/dopParams.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
})
export class ApplicationsComponent implements OnInit {
  deliveryStatus: InterFaceDopParams[] = [];
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
    source: '',
    status: '',
    branch: null,
    date_start: '',
    date_end: '',
  };

  applications: InterFaceApplications[] = [];

  constructor(private applicationsService: ApplicationsService,
              private dopParamsService: DopParamsService) {
  }

  ngOnInit() {
    this.applicationsService.getApplicationsStatus().then((data: InterFaceDopParams[]) => {
        this.deliveryStatus = data;
      },
      (error) => {
        console.log('Ошибка при получении статусов: ', error);
      });

    this.applicationsService.getApplicationsFields().then((data: InterFaceActiveFields[]) => {
        this.activeFields = data;

        this.changeShowFields();
      },
      (error) => {
        console.log('Ошибка при получении списка полей оборудования: ', error);
      });

    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branches = data;
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });

    this.getApplication();
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
    }).then((data: any) => {
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
}
