import {EventEmitter, Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class AuthService {
  authenticated: EventEmitter<any> = new EventEmitter();

  constructor(private httpService: HttpService) {
    this.authenticated.emit(false);
  }

  // получение детальной информации по клиенту
  public auth(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/auth', data)
        .then(() => {
            this.authenticated.emit(true);
            resolve();
          },
          (error) => {
            console.log('Ошибка при авторизации', error);
            reject();
          }
        );
    });
  }

  getEmittedValue() {
    return this.authenticated;
  }
}
