import {Injectable} from '@angular/core';

@Injectable()
export class GlobalPayList {
  data: {
    show: boolean;
    pay_list: {
      'date': string,
      'user_id': number,
      'sum': string
    };
  };
}
