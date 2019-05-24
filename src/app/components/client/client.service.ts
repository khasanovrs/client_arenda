import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ClientService {
  clients: IClientsUr[] = [];

  constructor(private httpService: HttpService) {
  }

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

  public searchClientUr(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/search-client', data)
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

  public updateStatusClientUr(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/update-status-ur-client', data)
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
}
