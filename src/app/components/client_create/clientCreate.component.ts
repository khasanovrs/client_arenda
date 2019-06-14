import {Component, OnInit} from '@angular/core';
import {ClientCreateService} from './clientCreate.service';
import {DopParamsService} from '../../services/dopParams.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {Router} from '@angular/router';
import {GlobalParams} from '../../storage/global-params';

@Component({
  selector: 'app-client-create',
  templateUrl: './clientCreate.component.html',
})
export class ClientCreateComponent implements OnInit {
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
    address_passport: '',
  };

  constructor(private clientCreateService: ClientCreateService,
              private dopParamsService: DopParamsService,
              private globalParamsMessage: GlobalParamsMessage,
              private globalParams: GlobalParams,
              private router: Router) {
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

    if (this.newClient.phone_chief === '' && this.newClient.phone === '' && this.newClient.phone_2 === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать хотя бы 1 номер телефона', type: 'error', body: ''};
      return false;
    }

    this.clientCreateService.addClient({
      sale: this.newClient.sale,
      branch: this.newClient.branch,
      status: this.newClient.status,
      source: this.newClient.source,
      name: this.newClient.name,
      inn: this.newClient.inn,
      occupation: this.newClient.occupation,
      address: this.newClient.address,
      ogrn: this.newClient.ogrn,
      bic: this.newClient.bic,
      kpp: this.newClient.kpp,
      schet: this.newClient.schet,
      name_chief: this.newClient.name_chief,
      email: this.newClient.email,
      phone_chief: this.newClient.phone_chief.replace(/[\),\(,\-,+,\s]/g, ''),
      phone: this.newClient.phone.replace(/[\),\(,\-,+,\s]/g, ''),
      phone_2: this.newClient.phone_2.replace(/[\),\(,\-,+,\s]/g, '')
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Пользователь успешно добавлен', type: 'success', body: ''};
        this.globalParams.showModalCreateUser = false;
        this.router.navigate(['/clients']);
      },
      (error) => {
        console.log('Ошибка при добавлении нового пользователей: ', error);
      });
  }
}
