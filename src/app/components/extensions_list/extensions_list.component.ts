import {Component, OnInit} from '@angular/core';
import {GlobalExtensionsList} from './global-extensions-list';

@Component({
  selector: 'app-extension-list',
  templateUrl: './extensions_list.component.html',
  styleUrls: ['./extensions_list.scss']
})
export class ExtensionsListComponent implements OnInit {
  data: any = {
    data: {
      show: false,
      extension_list: {
        'date': '',
        'user_id': '',
        'count': null
      }
    }
  };

  constructor(private globalExtensionsList: GlobalExtensionsList) {
    this.data = globalExtensionsList;
  }

  ngOnInit() {
  }

  clear() {
    this.data.data.show = false;
  }
}
