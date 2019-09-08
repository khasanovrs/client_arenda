import {Injectable} from '@angular/core';

@Injectable()
export class GlobalParamsRental {
  data = {
    show: false,
    date_end: '',
    type_lease: null,
    app_id: null
  };
}
