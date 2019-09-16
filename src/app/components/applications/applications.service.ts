import {EventEmitter, Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ApplicationsService {
  applicationsFieldsList: InterFaceActiveFields[] = [];
  applicationsStatusList: InterFaceDopParams[] = [];
  refreshInfo: EventEmitter<any> = new EventEmitter(false);

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

  // получение списка заявов
  public getApplication(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-applications', data)
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении заявок', error);
            reject();
          }
        );
    });
  }

  // изменение статуса
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

  // добавление платежа
  public addPay(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-pay', data)
        .then((result: InterFaceDopParams[]) => {
            resolve(result);
            this.refreshInfo.emit(true);
          },
          (error) => {
            console.log('Ошибка при добавлении нового платежа', error);
            reject();
          }
        );
    });
  }

  // получение информации по заявке
  public getApplicationInfo(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-application-info', data)
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

  // продлить контракт
  public extendRental(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/extend-rental', data)
        .then(() => {
            this.refreshInfo.emit(true);
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении статуса для проката', error);
            reject();
          }
        );
    });
  }
}
