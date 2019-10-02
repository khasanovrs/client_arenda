import {Component, OnInit} from '@angular/core';
import {ClientInfoService} from './clientInfo.service';
import {DopParamsService} from '../../services/dopParams.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {GlobalPayListClient} from '../pay_list_client/global-pay-list-client';
import {GlobalApplicationListClient} from '../application_list_client/global-application-list-client';
import {GlobalClientChangeStatusList} from '../client_change_status_list/global-client_change_status_list';
import {ClientService} from '../client/client.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './clientInfo.component.html',
})
export class ClientInfoComponent implements OnInit {
  // список статусов
  statusList: InterFaceDopParams[] = [];
  // список филиалов
  branches: InterFaceDopParams[] = [];
  // список скидок
  discounts: InterFaceDopParams[] = [];
  // список исчтоников
  sources: InterFaceDopParams[] = [];
  client: InterFaceClient = {
    sale: null,
    branch: null,
    new_status: null,
    old_status: null,
    reason_change_status: '',
    source: null,
    name: '',
    inn: null,
    kpp: null,
    name_chief: '',
    fio: '',
    phone_1: '',
    phone_2: '',
    phone_3: '',
    email: '',
    number_passport: '',
    count_application: null,
    all_total_paid: null,
    application_list: [{
      rent_start: '',
      rent_end: '',
      sum: '',
      total_paid: '',
      equipments: '',
    }],
    pay_list: [{
      sum: '',
      date: '',
      equipments: '',
      cashBox: ''
    }],
    change_status_list: [{
      date: '',
      old_status: '',
      new_status: '',
      text: '',
      user: '',
    }]
  };

  // идентификатор клиента
  clientId: null;

  constructor(private clientInfoService: ClientInfoService,
              private dopParamsService: DopParamsService,
              private globalParamsMessage: GlobalParamsMessage,
              private router: ActivatedRoute,
              private globalPayListClient: GlobalPayListClient,
              private globalApplicationListClient: GlobalApplicationListClient,
              private globalClientChangeStatusList: GlobalClientChangeStatusList,
              private clientService: ClientService) {

    this.router.params.subscribe(
      (params: Params): void => {
        this.clientId = params.id;
      }
    );

    this.clientService.refreshClientInfo.subscribe(() => {
      this.getClients();
    });
  }

  ngOnInit() {
    this.dopParamsService.getStatusClient().then((data: InterFaceDopParams[]) => {
        this.statusList = data;
      },
      (error) => {
        console.log('Ошибка при получении статусов: ', error);
      });

    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branches = data;
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });

    this.dopParamsService.getDiscount().then((data: InterFaceDopParams[]) => {
        this.discounts = data;
      },
      (error) => {
        console.log('Ошибка при получении списка скидок: ', error);
      });

    this.dopParamsService.getSource().then((data: InterFaceDopParams[]) => {
        this.sources = data;
      },
      (error) => {
        console.log('Ошибка при получении источников: ', error);
      });

    this.getClients();
  }

  getClients() {
    this.clientInfoService.getClientInfo({clientId: this.clientId}).then((data: InterFaceClient) => {
        this.client = data;
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по клиенту: ', error);
      });
  }

  changeClient() {
    if (this.client.sale === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать скидку', type: 'error', body: ''};
      return false;
    }

    if (this.client.branch === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать город аренды', type: 'error', body: ''};
      return false;
    }

    if (this.client.new_status === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать статус', type: 'error', body: ''};
      return false;
    }

    if (this.client.phone_1 === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать хотя бы 1 номер телефона', type: 'error', body: ''};
      return false;
    }

    if (this.client.new_status !== this.client.old_status && (this.client.reason_change_status === '' || typeof this.client.reason_change_status === 'undefined')) {
      this.globalParamsMessage.data = {title: 'Необходимо указать причиниу смены статуса', type: 'error', body: ''};
      return false;
    }


    this.clientService.addClient({
      sale: this.client.sale,
      branch: this.client.branch,
      new_status: this.client.new_status,
      old_status: this.client.old_status,
      source: this.client.source,
      name: this.client.name,
      inn: this.client.inn,
      kpp: this.client.kpp,
      name_chief: this.client.name_chief,
      fio: this.client.fio,
      email: this.client.email,
      clientId: this.clientId,
      reason_change_status: this.client.reason_change_status,
      phone_1: this.client.phone_1.replace(/[\),\(,\-,+,\s]/g, ''),
      phone_2: this.client.phone_2.replace(/[\),\(,\-,+,\s]/g, ''),
      phone_3: this.client.phone_3.replace(/[\),\(,\-,+,\s]/g, '')
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Пользователь успешно изменен', type: 'success', body: ''};
      },
      (error) => {
        console.log('Ошибка при изменении пользователей: ', error);
      });
  }

  // история оплат
  open_pay_history() {
    this.globalPayListClient.data = {
      show: true,
      data: this.client.pay_list
    };
  }

  // история заявок
  open_application_history() {
    this.globalApplicationListClient.data = {
      show: true,
      data: this.client.application_list
    };
  }

  // история смены статусов
  open_change_status_history() {
    this.globalClientChangeStatusList.data = {
      show: true,
      data: this.client.change_status_list
    };
  }

  // проверка через приставов
  getBailiffs() {
    let name = '';
    let type = '';
    if (this.client.fio === '') {
      name = this.client.name;
      type = '2';
    } else {
      name = this.client.fio;
      type = '1';
    }
    this.clientService.getBailiffs({fio: name, region: this.client.branch, type: type}).then((data: any) => {
        if (data.length === 0) {
          this.globalParamsMessage.data = {title: 'У клиента нет долгов', type: 'success', body: ''};
        }

      },
      (error) => {
        console.log('Ошибка при получении данных от приставов: ', error);
      });
  }
}
