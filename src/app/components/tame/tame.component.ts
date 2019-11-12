import {Component, OnInit} from '@angular/core';
import {GlobalParamsTame} from './global-params-tame';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {ApplicationsService} from '../applications/applications.service';

@Component({
  selector: 'app-tame',
  templateUrl: './tame.component.html',
})
export class TameComponent implements OnInit {
  data: any;

  constructor(private globalParamsTame: GlobalParamsTame,
              private applicationsService: ApplicationsService,
              private globalParamsMessage: GlobalParamsMessage) {
    this.data = globalParamsTame;
  }

  ngOnInit() {
  }

  clear() {
    this.data.data = {
      show: false,
      date_end: '',
      type_lease: null,
      app_eq_id: null,
      app_id: null,
      count: ''
    };
  }

  send() {
    if (this.data.data.count === '') {
      this.globalParamsMessage.data = {title: 'Не указан количество дней/месяцев для продления', type: 'error', body: ''};
      return false;
    }
    this.data.data.show = false;
    if (this.data.data.eq_id !== null) {
      this.applicationsService.tameRental({
        count: this.data.data.count,
        app_eq_id: this.data.data.app_eq_id,
        app_id: this.data.data.app_id
      }).then(() => {
          this.globalParamsMessage.data = {title: 'Аренда успешно обновлена', type: 'success', body: ''};
        },
        (error) => {
          console.log('Ошибка при добавлении нового платежа: ', error);
        });
    }
  }
}
