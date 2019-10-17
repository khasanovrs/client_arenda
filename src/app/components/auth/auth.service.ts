import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';
import {SessionStorageService} from '../../storage/session-storage.service';
import {GlobalParamsUser} from '../../storage/global-params-user';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService,
              private sessionStorageService: SessionStorageService,
              private globalParamsUser: GlobalParamsUser) {
  }

  // получение детальной информации по клиенту
  public auth(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/auth', data)
        .then((result: InterFaceAuthClient) => {
            this.sessionStorageService.change(true);
            this.globalParamsUser.branch = result.branch;
            this.globalParamsUser.type = result.type;
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
  public getUser() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-user', '')
        .then((result: InterFaceAuthClient) => {
            this.globalParamsUser.branch = result.branch;
            this.globalParamsUser.type = result.type;
            resolve();
          },
          (error) => {
            console.log('Ошибка при получении данных по пользователю', error);
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
