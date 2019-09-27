import {Component, OnInit} from '@angular/core';
import {GlobalClientChangeStatusList} from './global-client_change_status_list';

@Component({
  selector: 'app-client-change-status-list',
  templateUrl: './client_change_status_list.component.html',
  styleUrls: ['./client_change_status_list.scss']
})
export class ClientChangeStatusListComponent implements OnInit {
  data: any = {
    show: false,
    data: {
      date: '',
      old_status: '',
      new_status: '',
      user: '',
      text: '',
    }
  };

  constructor(private globalClientChangeStatusList: GlobalClientChangeStatusList) {
    this.data = globalClientChangeStatusList;
  }

  ngOnInit() {
  }

  clear() {
    this.data.data.show = false;
  }
}
