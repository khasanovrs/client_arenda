import {Injectable} from '@angular/core';

@Injectable()
export class GlobalParamsClientChangeStatus {
  data = {
    show: false,
    old_status: null,
    new_status: null,
    client_id: null,
    text: ''
  };
}
