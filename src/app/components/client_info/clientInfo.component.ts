import {Component, OnInit} from '@angular/core';
import {ClientInfoService} from './clientInfo.service';
import {DopParamsService} from '../../services/dopParams.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ClientCreateService} from '../client_create/clientCreate.service';

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
  client: InterFaceNewClient = {
    sale: null,
    branch: null,
    status: null,
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
    number_passport: ''
  };

  // идентификатор клиента
  clientId: null;

  constructor(private clientInfoService: ClientInfoService,
              private dopParamsService: DopParamsService,
              private clientCreateService: ClientCreateService,
              private globalParamsMessage: GlobalParamsMessage,
              private router: ActivatedRoute) {

    this.router.params.subscribe(
      (params: Params): void => {
        this.clientId = params.id;
      }
    );
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

    this.clientInfoService.getClientInfo({clientId: this.clientId}).then((data: InterFaceNewClient) => {
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

    if (this.client.status === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать статус', type: 'error', body: ''};
      return false;
    }

    if (this.client.phone_1 === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать хотя бы 1 номер телефона', type: 'error', body: ''};
      return false;
    }

    this.clientCreateService.addClient({
      sale: this.client.sale,
      branch: this.client.branch,
      status: this.client.status,
      source: this.client.source,
      name: this.client.name,
      inn: this.client.inn,
      kpp: this.client.kpp,
      name_chief: this.client.name_chief,
      fio: this.client.fio,
      email: this.client.email,
      clientId: this.clientId,
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
}
