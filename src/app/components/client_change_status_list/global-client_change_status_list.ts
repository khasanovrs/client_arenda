import {Injectable} from '@angular/core';

@Injectable()
export class GlobalClientChangeStatusList {
  data = {
    show: false,
    data: [{
      date: '',
      old_status: '',
      new_status: '',
      text: '',
      user: '',
    }]
  };
}
