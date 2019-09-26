import {Component, OnInit} from '@angular/core';
import {GlobalApplicationListClient} from './global-application-list-client';

@Component({
  selector: 'app-application-list-client',
  templateUrl: './application_list_client.component.html',
  styleUrls: ['./application_list_client.scss']
})
export class ApplicationListClientComponent implements OnInit {
  data: any = {
    data: {
      show: false,
      pay_list: {
        rent_start: '',
        rent_end: '',
        sum: '',
        total_paid: '',
        equipments: ''
      }
    }
  };

  constructor(private globalApplicationListClient: GlobalApplicationListClient) {
    this.data = globalApplicationListClient;
  }

  ngOnInit() {
  }

  clear() {
    this.data.data.show = false;
  }
}
