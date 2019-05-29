import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ClientInfoService {

  constructor(private httpService: HttpService) {
  }

  // получение детальной информации по клиенту
  public getClientInfo(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-client-info', data)
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении детальной информации по клиенту', error);
            reject();
          }
        );
    });
  }

  // обновление детальной информации по клиенту
  public updateClientInfo(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/update-client-info', data)
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при обновлении детальной информации по клиенту', error);
            reject();
          }
        );
    });
  }
}
