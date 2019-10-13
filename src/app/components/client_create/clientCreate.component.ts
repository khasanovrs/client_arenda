import {Component, Input, OnInit} from '@angular/core';
import {DopParamsService} from '../../services/dopParams.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {GlobalParams} from '../../storage/global-params';
import {ClientService} from '../client/client.service';
import {GlobalParamsUser} from '../../storage/global-params-user';

@Component({
  selector: 'app-client-create',
  templateUrl: './clientCreate.component.html',
})

export class ClientCreateComponent implements OnInit {
  @Input() app_branch: number;
  // список статусов
  statusList: InterFaceDopParams[] = [];
  // список филиалов
  branches: InterFaceDopParams[] = [];
  // список скидок
  discounts: InterFaceDopParams[] = [];
  // список исчтоников
  sources: InterFaceDopParams[] = [];
  newClient: InterFaceNewClient = {
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
    number_passport: '',
    date_birth: ''
  };

  constructor(private clientService: ClientService,
              private dopParamsService: DopParamsService,
              private globalParamsMessage: GlobalParamsMessage,
              private globalParams: GlobalParams,
              private globalParamsUser: GlobalParamsUser) {
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
        console.log(1,this.globalParamsUser)
        this.newClient.branch = this.globalParamsUser.type === 1 ? this.app_branch : this.globalParamsUser.branch;
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });

    this.dopParamsService.getDiscount().then((data: InterFaceDopParams[]) => {
        this.discounts = data;
        this.newClient.sale = this.discounts[0].val;
      },
      (error) => {
        console.log('Ошибка при получении списка скидок: ', error);
      });

    this.dopParamsService.getSource().then((data: InterFaceDopParams[]) => {
        this.newClient.source = 1;
        this.sources = data;
      },
      (error) => {
        console.log('Ошибка при получении источников: ', error);
      });
  }

  addClient() {
    if (this.newClient.sale === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать скидку', type: 'error', body: ''};
      return false;
    }

    if (this.newClient.branch === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать город аренды', type: 'error', body: ''};
      return false;
    }

    if (this.newClient.status === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать статус', type: 'error', body: ''};
      return false;
    }

    if (this.newClient.phone_1 === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать хотя бы 1 номер телефона', type: 'error', body: ''};
      return false;
    }

    this.clientService.addClient({
      sale: this.newClient.sale,
      branch: this.newClient.branch,
      new_status: this.newClient.status,
      source: this.newClient.source,
      name: this.newClient.name,
      inn: this.newClient.inn,
      kpp: this.newClient.kpp,
      name_chief: this.newClient.name_chief,
      fio: this.newClient.fio,
      email: this.newClient.email,
      clientId: '',
      phone_1: this.newClient.phone_1.replace(/[\),\(,\-,+,\s]/g, ''),
      phone_2: this.newClient.phone_2.replace(/[\),\(,\-,+,\s]/g, ''),
      phone_3: this.newClient.phone_3.replace(/[\),\(,\-,+,\s]/g, ''),
      date_birth: this.newClient.date_birth,
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Пользователь успешно добавлен', type: 'success', body: ''};
        this.globalParams.showModalCreateUser = false;
      },
      (error) => {
        console.log('Ошибка при добавлении нового пользователей: ', error);
      });
  }
}
