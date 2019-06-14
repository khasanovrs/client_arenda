import {Component, OnInit} from '@angular/core';
import {ApplicationsService} from './applications.service';

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

  filters = {
    source: '',
    status: '',
  };

  applications: InterFaceApplications[] = [];

  constructor(private applicationsService: ApplicationsService) {
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
    };

    this.getApplication();
  }
}
