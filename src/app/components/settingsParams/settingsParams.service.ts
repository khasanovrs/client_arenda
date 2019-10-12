import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class SettingsParamsService {
  constructor(private httpService: HttpService) {
  }

  public getSettings() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-settings')
        .then((result: InterFaceSettings[]) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении настроек', error);
            reject();
          }
        );
    });
  }

  public addSettings(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-settings', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при измении настроек', error);
            reject();
          }
        );
    });
  }

}
