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
    like: '',
  };

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
  }

  // изменение типа источников
  changeTypeApplications(data) {
    this.filters.source = data;
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
    this.applicationsService.updateApplicationsStatus({application_id: application.id, application_status: application.status}).then(() => {
      },
      (error) => {
        console.log('Ошибка при изменении статуса у оборудования: ', error);
      });
  }

  getApplications() {

  }
}
