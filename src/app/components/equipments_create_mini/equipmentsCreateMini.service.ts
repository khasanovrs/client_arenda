import {EventEmitter, Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class EquipmentsCreateMiniService {
  closeModalAddEq: EventEmitter<any> = new EventEmitter(false);

  constructor(private httpService: HttpService) {
  }

  public addEquipment(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-equipment-mini', data)
        .then(() => {
            this.closeModalAddEq.emit(true);
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
