import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class HireService {
  hireFieldsList: InterFaceActiveFields[] = [];
  hireStatusList: InterFaceDopParams[] = [];

  constructor(private httpService: HttpService) {
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
}
