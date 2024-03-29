import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';

@Injectable()
export class StockService {

  constructor(private httpService: HttpService,
              private globalParamsMessage: GlobalParamsMessage) {
  }

  // добавление склада
  public addStock(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-stock', data)
        .then((result: any) => {
            this.globalParamsMessage.data = {title: result.msg, type: 'success', body: ''};
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении склада', error);
            reject();
          }
        );
    });
  }

  // удаление склада
  public deleteStock(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/delete-stock', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при удалении склада', error);
            reject();
          }
        );
    });
  }
}
