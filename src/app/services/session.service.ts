import {Injectable} from '@angular/core';
import {HttpService} from '../utils/http/http.service';

@Injectable()
export class SessionService {

  constructor(private httpService: HttpService) {
  }

  // выход
  public exit() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/exit')
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при выходе', error);
            reject();
          }
        );
    });
  }
}
