import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ApplicationsService {
  applicationsFieldsList: InterFaceActiveFields[] = [];
  applicationsStatusList: InterFaceDopParams[] = [];
  applicationsSourceList: InterFaceDopParams[] = [];
  applicationsDeliveryList: InterFaceDopParams[] = [];

  constructor(private httpService: HttpService) {
  }

  // получение списка активных полей
  public getApplicationsFields() {
    return new Promise((resolve, reject) => {
      if (this.applicationsFieldsList.length === 0) {
        this.httpService.prepareQuery('api/get-applications-field', '')
          .then((result: InterFaceActiveFields[]) => {
              this.applicationsFieldsList = result;
              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении списка полей для заявок', error);
              reject();
            }
          );
      } else {
        resolve(this.applicationsFieldsList);
      }
    });
  }

  // изменение списка активных полей для таблицы
  public changeFields(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/change-applications-field', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при изменение списка отображаемых полей', error);
            reject();
          }
        );
    });
  }

  // получение списка статусов
  public getApplicationsStatus() {
    return new Promise((resolve, reject) => {
      if (this.applicationsStatusList.length === 0) {
        this.httpService.prepareQuery('api/get-applications-status', '')
          .then((result: InterFaceDopParams[]) => {
              this.applicationsStatusList = result;
              resolve(this.applicationsStatusList);
            },
            (error) => {
              console.log('Ошибка при получении списка статусов заявки', error);
              reject();
            }
          );
      } else {
        resolve(this.applicationsStatusList);
      }
    });
  }

  // получение списка источников
  public getApplicationsSource() {
    return new Promise((resolve, reject) => {
      if (this.applicationsSourceList.length === 0) {
        this.httpService.prepareQuery('api/get-applications-status', '')
          .then((result: InterFaceDopParams[]) => {
              this.applicationsSourceList = result;
              resolve(this.applicationsSourceList);
            },
            (error) => {
              console.log('Ошибка при получении списка источников заявки', error);
              reject();
            }
          );
      } else {
        resolve(this.applicationsSourceList);
      }
    });
  }

  // получение списка источников
  public getApplicationsDelivery() {
    return new Promise((resolve, reject) => {
      if (this.applicationsDeliveryList.length === 0) {
        this.httpService.prepareQuery('api/get-applications-delivery', '')
          .then((result: InterFaceDopParams[]) => {
              this.applicationsDeliveryList = result;
              resolve(this.applicationsDeliveryList);
            },
            (error) => {
              console.log('Ошибка при получении списка статусов доставки', error);
              reject();
            }
          );
      } else {
        resolve(this.applicationsDeliveryList);
      }
    });
  }

  // получение списка источников
  public updateApplicationsStatus(data) {
    return new Promise((resolve, reject) => {
        this.httpService.prepareQuery('api/update-applications-status', data)
          .then((result: InterFaceDopParams[]) => {
              resolve(result);
            },
            (error) => {
              console.log('Ошибка при изменении статуса заявки', error);
              reject();
            }
          );
    });
  }
}
