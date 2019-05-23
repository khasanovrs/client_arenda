import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class UsersService {
  constructor(private httpService: HttpService) {
  }

  public getUsers(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-users', data)
        .then((result: InterFaceUsers []) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении пользователей', error);
            reject();
          }
        );
    });
  }

  public addUsers(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-users', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении нового пользователя', error);
            reject();
          }
        );
    });
  }

}
