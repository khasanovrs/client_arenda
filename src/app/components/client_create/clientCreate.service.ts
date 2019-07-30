import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ClientCreateService {

  constructor(private httpService: HttpService) {
  }

  public addClient(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-client', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении нового клиента', error);
            reject();
          }
        );
    });
  }
}
