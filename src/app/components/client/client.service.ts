import {EventEmitter, Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';

@Injectable()
export class ClientService {
  clients: IClientsUr[] = [];
  miniClientInfo: InterFaceMiniClientInfo = {
    client_email: '',
    client_fio: '',
    client_id: null,
    client_number_passport: '',
    client_phone: '',
    client_type: null
  };

  activeFields: InterFaceActiveFields[] = [];
  refreshClientInfo: EventEmitter<any> = new EventEmitter(false);

  constructor(private httpService: HttpService,
              private globalParamsMessage: GlobalParamsMessage) {
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

  // поиск данных от приставов
  public getBailiffs(data) {
    return new Promise((resolve, reject) => {

      const data = [
        {
          bailiff: 'КУРБАТОВА Е. В. +7(3412)27-12-05<br>+7(3412)27-12-05<br>',
          department: 'Увинский МРОСП 427260, п.Ува, ул.Калинина, д.23',
          details: 'Исполнительный лист от 09.09.2015 № ФС 004498434 ПЕРВОМАЙСКИЙ РАЙОННЫЙ СУД Г. ИЖЕВСКА',
          exe_production: '13687/15/18042-ИП от 13.10.2015',
          ip_end: '2016-12-19, 46, 1, 3',
          name: 'ЧАШНИКОВ АЛЕКСАНДР ВЛАДИМИРОВИЧ 22.07.1985 ПОС. СЮРЕК СЮМСИНСКОГО Р-НА УДМУРТСКОЙ РЕСПУБЛИКИ',
          subject: 'Наложение ареста'
        },
        {
          bailiff: 'КУРБАТОВА Е. В. +7(3412)27-12-05<br>+7(3412)27-12-05<br>',
          department: 'Увинский МРОСП 427260, п.Ува, ул.Калинина, д.23',
          details: 'Исполнительный лист от 09.09.2015 № ФС 004498434 ПЕРВОМАЙСКИЙ РАЙОННЫЙ СУД Г. ИЖЕВСКА',
          exe_production: '13687/15/18042-ИП от 13.10.2015',
          ip_end: '2016-12-19, 46, 1, 3',
          name: 'ЧАШНИКОВ АЛЕКСАНДР ВЛАДИМИРОВИЧ 22.07.1985 ПОС. СЮРЕК СЮМСИНСКОГО Р-НА УДМУРТСКОЙ РЕСПУБЛИКИ',
          subject: 'Наложение ареста'
        },
        {
          bailiff: 'КУРБАТОВА Е. В. +7(3412)27-12-05<br>+7(3412)27-12-05<br>',
          department: 'Увинский МРОСП 427260, п.Ува, ул.Калинина, д.23',
          details: 'Исполнительный лист от 09.09.2015 № ФС 004498434 ПЕРВОМАЙСКИЙ РАЙОННЫЙ СУД Г. ИЖЕВСКА',
          exe_production: '13687/15/18042-ИП от 13.10.2015',
          ip_end: '2016-12-19, 46, 1, 3',
          name: 'ЧАШНИКОВ АЛЕКСАНДР ВЛАДИМИРОВИЧ 22.07.1985 ПОС. СЮРЕК СЮМСИНСКОГО Р-НА УДМУРТСКОЙ РЕСПУБЛИКИ',
          subject: 'Наложение ареста'
        }
      ];

      resolve(data);
      /*this.httpService.prepareQuery('api/get-bailiffs', data)
        .then((result: any) => {
            if (typeof result.msg != 'undefined') {
              this.globalParamsMessage.data = {title: result.msg, type: 'success', body: ''};
              resolve(result.data);
            } else {
              resolve(result);
            }
          },
          (error) => {
            console.log('Ошибка при получении данных от приставов', error);
            reject(error);
          }
        );*/
    });
  }

  public addClient(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-client', data)
        .then((result: InterFaceMiniClientInfo) => {
            this.miniClientInfo = result;
            this.refreshClientInfo.emit(true);
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении нового клиента', error);
            reject();
          }
        );
    });
  }

  // удаление клиента
  public deleteClient(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/delete-client', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при удалении клиента', error);
            reject();
          }
        );
    });
  }

  // обновление статуса клиента
  public updateStatusClientUr(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/update-status-client', data)
        .then((result: any) => {
            this.refreshClientInfo.emit(true);
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
  public searchAllClientBranch(data) {
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
