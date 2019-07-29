import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';
import {SessionStorageService} from '../../storage/session-storage.service';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService,
              private sessionStorageService: SessionStorageService) {
  }

  // получение детальной информации по клиенту
  public auth(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/auth', data)
        .then(() => {
            this.sessionStorageService.change(true);
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
            this.sessionStorageService.exit();
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
