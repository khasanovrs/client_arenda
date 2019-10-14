import {Injectable} from '@angular/core';
import {HttpService} from '../utils/http/http.service';

@Injectable()
export class DocumentService {

  constructor(private httpService: HttpService) {
  }

  // получение источников
  public getDoc() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-doc')
        .then((result) => {
            console.log(1, result);
          },
          (error) => {
            console.log('Ошибка при получении документов', error);
            reject();
          }
        );
    });
  }
}
