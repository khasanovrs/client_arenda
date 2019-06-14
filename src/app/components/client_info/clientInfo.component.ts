import {Component, OnInit} from '@angular/core';
import {ClientInfoService} from './clientInfo.service';
import {DopParamsService} from '../../services/dopParams.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {ActivatedRoute, Params, Router} from '@angular/router';

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
    occupation: '',
    address: '',
    ogrn: null,
    bic: null,
    kpp: null,
    schet: null,
    name_chief: '',
    phone_chief: '',
    phone: '',
    phone_2: '',
    email: '',
    number_passport: '',
    where_passport: '',
    date_passport: '',
    address_passport: ''
  };

  // идентификатор клиента
  clientId: null;

  constructor(private clientInfoService: ClientInfoService,
              private dopParamsService: DopParamsService,
              private globalParamsMessage: GlobalParamsMessage,
              private router: ActivatedRoute) {

    this.router.params.subscribe(
      (params: Params): void => {
        this.clientId = params.id;
      }
    );
  }

  ngOnInit() {
    this.dopParamsService.getStatus().then((data: InterFaceDopParams[]) => {
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

    if (this.client.phone_chief === '' && this.client.phone === '' && this.client.phone_2 === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать хотя бы 1 номер телефона', type: 'error', body: ''};
      return false;
    }

    this.clientInfoService.updateClientInfo({
      sale: this.client.sale,
      branch: this.client.branch,
      status: this.client.status,
      source: this.client.source,
      name: this.client.name,
      inn: this.client.inn,
      occupation: this.client.occupation,
      address: this.client.address,
      ogrn: this.client.ogrn,
      bic: this.client.bic,
      kpp: this.client.kpp,
      schet: this.client.schet,
      name_chief: this.client.name_chief,
      phone_chief: this.client.phone_chief.replace(/[\),\(,\-,+,\s]/g, ''),
      phone: this.client.phone.replace(/[\),\(,\-,+,\s]/g, ''),
      phone_2: this.client.phone_2.replace(/[\),\(,\-,+,\s]/g, ''),
      clientId: this.clientId,
      email: this.client.email
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Пользователь успешно изменен', type: 'success', body: ''};
      },
      (error) => {
        console.log('Ошибка при добавлении нового пользователей: ', error);
      });
  }
}
