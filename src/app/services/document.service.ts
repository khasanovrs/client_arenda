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
      headers: new HttpHeaders(),
      test: 'test'
    };

    return this.http.get('http://localhost:8004/api/get-doc', httpOptions);
  }

  public getWord(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-doc', data)
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при удалении проекта', error);
            reject();
          }
        );
    });
  }

  // получение источников
  public getDoc() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-doc')
        .then((result) => {
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


