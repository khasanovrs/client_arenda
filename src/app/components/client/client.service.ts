import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ClientService {

  constructor(private httpService: HttpService) {
  }

  public getClientUr() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-ur-client')
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
      this.httpService.prepareQuery('api/search-ur-client', data)
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
}
