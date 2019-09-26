import {Injectable} from '@angular/core';

@Injectable()
export class GlobalApplicationListClient {
  data = {
    show: false,
    data: [{
      rent_start: '',
      rent_end: '',
      sum: '',
      total_paid: '',
      equipments: ''
    }]
  };
}
