import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';

@Injectable()
export class HireService {
  hireFieldsList: InterFaceActiveFields[] = [];
  hireStatusList: InterFaceDopParams[] = [];
  hireStateList: InterFaceDopParams[] = [];

  constructor(private httpService: HttpService,
              private globalParamsMessage: GlobalParamsMessage) {
  }

  // получение списка активных полей
  public getHireFields() {
    return new Promise((resolve, reject) => {
      if (this.hireFieldsList.length === 0) {
        this.httpService.prepareQuery('api/get-hire-field', '')
          .then((result: InterFaceActiveFields[]) => {
              this.hireFieldsList = result;
              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении списка полей для проката', error);
              reject();
            }
          );
      } else {
        resolve(this.hireFieldsList);
      }
    });
  }

  // изменение списка активных полей для таблицы
  public changeFields(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/change-hire-field', data)
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
  public getHireStatus() {
    return new Promise((resolve, reject) => {
      if (this.hireStatusList.length === 0) {
        this.httpService.prepareQuery('api/get-hire-status', '')
          .then((result: InterFaceDopParams[]) => {
              this.hireStatusList = result;
              resolve(this.hireStatusList);
            },
            (error) => {
              console.log('Ошибка при получении списка статусов проката', error);
              reject();
            }
          );
      } else {
        resolve(this.hireStatusList);
      }
    });
  }

  // получение списка заявов
  public getHire(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-hire', data)
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка проката', error);
            reject();
          }
        );
    });
  }

  // изменение статуса
  public updateHireStatus(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/update-hire-status', data)
        .then((result: InterFaceDopParams[]) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при изменении статуса проката', error);
            reject();
          }
        );
    });
  }

  // получение информации по заявке
  public getHireInfo(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-hire-info', data)
        .then((result: InterFaceDopParams[]) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при изменении статуса проката', error);
            reject();
          }
        );
    });
  }

  // обновлении информации по заявке
  public updateHire(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/update-hire', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при изменении информации по заявке', error);
            reject();
          }
        );
    });
  }

  // добавление статуса для проката
  public addHireStatus(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-hire-status', data)
        .then((result: any) => {
            this.globalParamsMessage.data = {title: result.msg, type: 'success', body: ''};
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении статуса для проката', error);
            reject();
          }
        );
    });
  }

  // продлить контракт
  public extendRental(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/extend-rental', data)
        .then((result: any) => {
            this.globalParamsMessage.data = {title: result.msg, type: 'success', body: ''};
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
