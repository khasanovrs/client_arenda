import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ReportService {

  constructor(private httpService: HttpService) {
  }

  // получение списка оборудования
  public getEquipments(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-report-equipment', data)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка оборудования', error);
            reject(error);
          }
        );
    });
  }

  // получение списка виджетов
  public getWidgets() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-report-mini-block', '')
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка виджетов', error);
            reject(error);
          }
        );
    });
  }
}
