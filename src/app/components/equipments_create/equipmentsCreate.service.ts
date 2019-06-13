import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class EquipmentsCreateService {

  constructor(private httpService: HttpService) {
  }

  public addEquipment(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-equipment', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении нового оборудования', error);
            reject();
          }
        );
    });
  }
}
