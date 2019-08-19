import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class MainService {

  constructor(private httpService: HttpService) {
  }

  // поиск и получение клиентов
  public getData(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-main-info', data)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении информации для рабочего стола', error);
            reject(error);
          }
        );
    });
  }
}
