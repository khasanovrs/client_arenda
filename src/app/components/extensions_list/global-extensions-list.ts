import {Injectable} from '@angular/core';

@Injectable()
export class GlobalExtensionsList {
  data = {
    show: false,
    extension_list: [{
      'date': '',
      'user_id': '',
      'count': null
    }]
  };
}
