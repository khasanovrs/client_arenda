import {Injectable} from '@angular/core';

@Injectable()
export class GlobalPayList {
  data = {
    client_id: null,
    id_equipments: null,
    pay_list: {
      'date': null,
      'user_id': null,
      'sum': ''
    }
  };
}
