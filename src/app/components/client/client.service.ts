import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ClientService {
  clients: IClientsUr[] = [];
  activeFields: InterFaceActiveFields[] = [];

  constructor(private httpService: HttpService) {
  }

  // поиск и получение клиентов
  public getClient(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-client', data)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка юр. клиентов', error);
            reject(error);
          }
        );
    });
  }

  // обновление статуса клиента
  public updateStatusClientUr(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/update-status-client', data)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при изменении статуса у юр. клиента', error);
            reject(error);
          }
        );
    });
  }

  // получение активных полей для клиента
  public getActiveFields() {
    return new Promise((resolve, reject) => {
      if (this.activeFields.length === 0) {
        this.httpService.prepareQuery('api/get-client-fields', '')
          .then((result: InterFaceActiveFields[]) => {
              this.activeFields = result;
              resolve(this.activeFields);
            },
            (error) => {
              console.log('Ошибка при получении отображаемых полей для клиента', error);
              reject();
            }
          );
      } else {
        resolve(this.activeFields);
      }
    });
  }

  // изменение списка активных полей для таблицы
  public changeFields(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/change-client-fields', data)
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

  // изменение списка активных полей для таблицы
  public searchClient(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-search-client', data)
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при поиске клиентов', error);
            reject();
          }
        );
    });
  }

  // изменение списка активных полей для таблицы
  public searchAllClient(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-all-client', data)
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении клиентов', error);
            reject();
          }
        );
    });
  }
}
