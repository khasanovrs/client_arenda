import {Injectable} from '@angular/core';

@Injectable()
export class GlobalPayListClient {
  data = {
    show: false,
    data: [{
      sum: '',
      date: '',
      equipments: '',
      cashBox: ''
    }]
  };
}
