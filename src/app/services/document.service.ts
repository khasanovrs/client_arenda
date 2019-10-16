import {Injectable} from '@angular/core';
import {HttpService} from '../utils/http/http.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DocumentService {

  constructor(private httpService: HttpService,
              private http: HttpClient) {
  }

  getPdf() {
    const httpOptions = {
      responseType: 'blob' as 'json',
      headers: new HttpHeaders()
    };

    return this.http.get('http://localhost:8004/api/get-doc', httpOptions);
  }

  // получение источников
  public getDoc() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-doc')
        .then((result) => {
            console.log(1, result);
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении документов', error);
            reject();
          }
        );
    });
  }
}


