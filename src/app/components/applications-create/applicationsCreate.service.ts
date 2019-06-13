import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ApplicationsCreateService {
  applicationsStatusList: InterFaceDopParams[] = [];
  applicationsSourceList: InterFaceDopParams[] = [];
  applicationsTypeLeaseList: InterFaceDopParams[] = [];
  applicationsDeliveryList: InterFaceDopParams[] = [];

  constructor(private httpService: HttpService) {
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

  // получение списка типов аренды
  public getApplicationsTypeLease() {
    return new Promise((resolve, reject) => {
      if (this.applicationsTypeLeaseList.length === 0) {
        this.httpService.prepareQuery('api/get-applications-type-lease', '')
          .then((result: InterFaceDopParams[]) => {
              this.applicationsTypeLeaseList = result;
              resolve(this.applicationsTypeLeaseList);
            },
            (error) => {
              console.log('Ошибка при получении списка типов аренды заявки', error);
              reject();
            }
          );
      } else {
        resolve(this.applicationsTypeLeaseList);
      }
    });
  }

  // получение списка источников
  public getApplicationsSource() {
    return new Promise((resolve, reject) => {
      if (this.applicationsSourceList.length === 0) {
        this.httpService.prepareQuery('api/get-applications-source', '')
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

  // создание заявки
  public addApplication(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-application', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении новой заявки', error);
            reject();
          }
        );
    });
  }
}
