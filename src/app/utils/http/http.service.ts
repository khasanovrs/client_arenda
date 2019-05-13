import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {GlobalParamsMessage} from '../../components/message_alert/global-params-message';

@Injectable()
export class HttpService {
  static handlerError(error: any = {}) {
    console.log('Ошибка после http-запроса', error);

    let text_error: string;
    if (typeof error.status !== 'undefined') {
      if (error.status === 0) {
        text_error = 'Неизвестная ошибка МИБ';
      } else if (error.status === 200) {
        text_error = error.body.json();
      } else if (error.status === 404) {
        text_error = 'Страница не найдена';
      } else if (error.status === 500) {
        text_error = 'МИБ временно не доступен';
        throw {name: 'MIB', message: 'МИБ временно не доступен'};
      } else {
        text_error = '';
      }
    } else {
      text_error = '';
    }

    return Observable.throw(text_error);
  }

  constructor(private http: HttpClient,
              private  globalParamsMessage: GlobalParamsMessage) {
  }

  public prepareQuery(url: string = 'noUrl', data) {
    return new Promise((resolve, reject) => {

      this.sendPostQuery(url, data).subscribe((result: { status: string, msg: string, data: object }) => {
          console.log('HttpService Ответ получен: ', result);
          if (result.status === 'OK') {
            console.log('Пришел ответ: ', result);
            resolve(result);
          } else if (result.status === 'ERROR') {
            this.globalParamsMessage.data = {title: 'Ошибка', body: result.msg, type: 'error'};
            reject();
          } else {
            this.globalParamsMessage.data = {title: 'Ошибка', body: 'Система врменно недостпуна', type: 'error'};
            reject();
          }
        },
        (error) => {
          console.log('Ошибка после отправки запроса в МИБ', error);
          this.globalParamsMessage.data = {title: 'Ошибка', body: 'Система врменно недостпуна', type: 'error'};
          reject(error);
        });
    });
  }

  private sendPostQuery(api, data: any) {
    const request = {
      data: data
    };
    const headers = new HttpHeaders();
    return this.http.post('http://localhost:8001/' + api, request, {headers: headers})
      .pipe(
        catchError(HttpService.handlerError)
      );
  }
}
