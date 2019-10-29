import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class EquipmentsCreateService {

  constructor(private httpService: HttpService) {
  }

  copyEqData: InterFacenewEquipments = {
    model: '',
    status: null,
    stock: null,
    discount: null,
    type: null,
    category: null,
    tool_number: null,
    mark: null,
    selling_price: '',
    price_per_day: '',
    rentals: 0,
    repairs: 0,
    repairs_sum: '0',
    revenue: '0',
    profit: '0',
    degree_wear: 0,
    payback_ratio: 0,
    power_energy: '',
    length: '',
    network_cord: '',
    power: '',
    frequency_hits: '',
    photo_name: '',
    photo_content: '',
    photo_alias: '',
    comment: '',
    count: 1
  };

  get copyEq() {
    return this.copyEqData;
  }

  set copyEq(value: InterFacenewEquipments) {
    this.copyEqData = value;
  }

  public addEquipment(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-equipment', data)
        .then(() => {
            this.clear();
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении нового оборудования', error);
            reject();
          }
        );
    });
  }

  sendOrderFiles(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-equipment-photo', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении фотографии оборудования', error);
            reject();
          }
        );
    });
  }

  clear() {
    this.copyEqData = {
      model: '',
      status: null,
      stock: null,
      discount: null,
      type: null,
      category: null,
      tool_number: null,
      mark: null,
      selling_price: '',
      price_per_day: '',
      rentals: 0,
      repairs: 0,
      repairs_sum: '0',
      revenue: '0',
      profit: '0',
      degree_wear: 0,
      payback_ratio: 0,
      power_energy: '',
      length: '',
      network_cord: '',
      power: '',
      frequency_hits: '',
      photo_name: '',
      photo_content: '',
      photo_alias: '',
      comment: '',
      count: 1
    };
  }
}
