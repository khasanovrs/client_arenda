import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class StockService {

  constructor(private httpService: HttpService) {
  }

  // добавление склада
  public addStock(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-stock', data)
        .then(() => {
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
