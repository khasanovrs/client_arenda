import {EventEmitter, Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class AuthService {
  authenticated: EventEmitter<any> = new EventEmitter();

  constructor(private httpService: HttpService) {
  }

  // получение детальной информации по клиенту
  public auth(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/auth', data)
        .then(() => {
            this.authenticated.emit(true);
            localStorage.setItem('auth', 'true');
            resolve();
          },
          (error) => {
            console.log('Ошибка при авторизации', error);
            reject();
          }
        );
    });
  }

  // получение детальной информации по клиенту
  public exit() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/exit', '')
        .then(() => {
            this.authenticated.emit(false);
            localStorage.setItem('auth', 'false');
            resolve();
          },
          (error) => {
            console.log('Ошибка при выходе', error);
            reject();
          }
        );
    });
  }

  getEmittedValue() {
    return this.authenticated;
  }
}
