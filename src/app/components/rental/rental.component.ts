import {Component, OnInit} from '@angular/core';
import {GlobalParamsRental} from './global-params-rental';
import {HireService} from '../hire/hire.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {ApplicationsService} from '../applications/applications.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
})
export class RentalComponent implements OnInit {
  data: any;

  constructor(private globalParamsRental: GlobalParamsRental,
              private applicationsService: ApplicationsService,
              private globalParamsMessage: GlobalParamsMessage) {
    this.data = globalParamsRental;
  }

  ngOnInit() {
  }

  clear() {
    this.data.data = {
      show: false,
      date_end: '',
      type_lease: null,
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
      this.applicationsService.extendRental({
        count: this.data.data.count,
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
