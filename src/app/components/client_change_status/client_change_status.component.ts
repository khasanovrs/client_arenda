import {Component} from '@angular/core';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {GlobalParamsClientChangeStatus} from './global-params-client-change-status';
import {ClientService} from '../client/client.service';

@Component({
  selector: 'app-client-change-status',
  templateUrl: './client_change_status.component.html',
})
export class ClientChangeStatusComponent {
  data: any;

  constructor(private globalParamsClientChangeStatus: GlobalParamsClientChangeStatus,
              private globalParamsMessage: GlobalParamsMessage,
              private clientService: ClientService) {
    this.data = globalParamsClientChangeStatus;
  }

  clear() {
    this.data.data = {
      show: false,
      old_status: null,
      new_status: null,
      client_id: null,
      text: ''
    };
  }

  send() {
    if (this.globalParamsClientChangeStatus.data.text === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать причину смены статуса', type: 'error', body: ''};
      return false;
    }

    if (this.globalParamsClientChangeStatus.data.old_status === null) {
      this.globalParamsMessage.data = {title: 'Ошибка при определении старого статуса', type: 'error', body: ''};
      return false;
    }

    if (this.globalParamsClientChangeStatus.data.new_status === null) {
      this.globalParamsMessage.data = {title: 'Ошибка при определении нового статуса', type: 'error', body: ''};
      return false;
    }

    if (this.globalParamsClientChangeStatus.data.client_id === null) {
      this.globalParamsMessage.data = {title: 'Ошибка при определении клиента', type: 'error', body: ''};
      return false;
    }


    this.clientService.updateStatusClientUr({
      client_id: this.globalParamsClientChangeStatus.data.client_id,
      old_status: this.globalParamsClientChangeStatus.data.old_status,
      new_status: this.globalParamsClientChangeStatus.data.new_status,
      text: this.globalParamsClientChangeStatus.data.text,
    }).then(() => {
        this.globalParamsClientChangeStatus.data = {
          show: false,
          old_status: null,
          new_status: null,
          client_id: null,
          text: ''
        };
      },
      (error) => {
        console.log('Ошибка при изменении статуса у клиента: ', error);
      });
  }
}
