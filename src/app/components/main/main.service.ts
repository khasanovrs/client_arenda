import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class MainService {

  constructor(public httpService: HttpService) {
  }

  public getData(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/auth', data)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении данных', error);
            reject(error);
          }
        );
    });
  }

  public getData2(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-branch', data)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении данных', error);
            reject(error);
          }
        );
    });
  }
}
