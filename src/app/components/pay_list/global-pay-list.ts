import {Injectable} from '@angular/core';

@Injectable()
export class GlobalPayList {
  data = {
    show: false,
    pay_list: [{
      'date': '',
      'user_id': null,
      'sum': '',
      'cash_box': ''
    }]
  };
}
