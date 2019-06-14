import {Component, OnInit} from '@angular/core';
import {ApplicationsCreateService} from './applicationsCreate.service';
import {DopParamsService} from '../../services/dopParams.service';
import {EquipmentsService} from '../equipments/equipments.service';
import {ClientService} from '../client/client.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {Router} from '@angular/router';
import {GlobalParams} from '../../storage/global-params';

@Component({
  selector: 'app-applications-create',
  templateUrl: './applicationsCreate.component.html',
})
export class ApplicationsCreateComponent implements OnInit {
  applicationsStatus: InterFaceDopParams[] = [];
  applicationsSource: InterFaceDopParams[] = [];
  applicationsDelivery: InterFaceDopParams[] = [];
  applicationsTypeLeases: InterFaceDopParams[] = [];
  equipmentsTypeList: InterFaceDopParams[] = [];
  // отображение модального окна создания пользователя
  showCreateClient = false;
  // список скидок
  discounts: InterFaceDopParams[] = [];
  // отображение окна поиска клиента из бд
  showSearchClient = {
    show: false,
    filter: '',
    clients: []
  };

  application: InterFaceNewApplication = {
    client_id: null,
    equipments: [
      {id: 7, name: 'Оборудование 1', count: 1, price: '1200', stock: 2, photo: '1'},
      {id: 8, name: 'Оборудование 2', count: 4, price: '750', stock: 1, photo: '1'}
    ],
    sum: '6000',
    delivery_sum: '1000',
    typeLease: {val: null, required: true, name: 'тип аренды'},
    sale: {val: null, required: true, name: 'скидка'},
    status: {val: null, required: true, name: 'статус'},
    source: {val: null, required: true, name: 'источник'},
    rent_start: {val: null, required: true, name: 'начало аренды'},
    rent_end: {val: null, required: true, name: 'конец аренды'},
    delivery: {val: null, required: true, name: 'тип доставки'},
    client_fio: {val: '', required: true, name: 'фио клиента'},
    client_email: {val: '', required: false, name: ''},
    comment: '',
    client_phone: {val: '', required: true, name: 'телефон клиента'},
    client_number_passport: {val: '', required: true, name: 'серия и номер паспорта'},
    client_where_passport: {val: '', required: true, name: 'кем выдан паспорт'},
    client_date_passport: {val: '', required: true, name: 'дата выдачи паспорта'},
    client_address_passport: {val: '', required: true, name: 'адрес регистрации'}
  };

  constructor(private applicationsCreateService: ApplicationsCreateService,
              private dopParamsService: DopParamsService,
              private equipmentsService: EquipmentsService,
              private clientService: ClientService,
              private globalParamsMessage: GlobalParamsMessage,
              public globalParams: GlobalParams,
              private router: Router) {
  }

  ngOnInit() {
    this.applicationsCreateService.getApplicationsStatus().then((data: InterFaceDopParams[]) => {
        this.applicationsStatus = data;
      },
      (error) => {
        console.log('Ошибка при получении статусов: ', error);
      });

    this.applicationsCreateService.getApplicationsSource().then((data: InterFaceDopParams[]) => {
        this.applicationsSource = data;
      },
      (error) => {
        console.log('Ошибка при получении источников: ', error);
      });

    this.applicationsCreateService.getApplicationsDelivery().then((data: InterFaceDopParams[]) => {
        this.applicationsDelivery = data;
      },
      (error) => {
        console.log('Ошибка при получении статусов доставки: ', error);
      });

    this.applicationsCreateService.getApplicationsTypeLease().then((data: InterFaceDopParams[]) => {
        this.applicationsTypeLeases = data;
      },
      (error) => {
        console.log('Ошибка при получении типов аренды: ', error);
      });

    this.equipmentsService.getEquipmentsType().then((data: InterFaceDopParams[]) => {
        this.equipmentsTypeList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка типов оборудования: ', error);
      });

    this.dopParamsService.getDiscount().then((data: InterFaceDopParams[]) => {
        this.discounts = data;
      },
      (error) => {
        console.log('Ошибка при получении списка скидок: ', error);
      });
  }

  // поиск клиентов из бд
  searchClient(filter) {
    if (filter === '') {
      return false;
    }

    this.clientService.searchClient({filter: filter}).then((data: InterFaceSearchClient[]) => {
        this.showSearchClient.clients = data;
      },
      (error) => {
        console.log('Ошибка при получении списка сотрудников: ', error);
      });
  }

  // заполнение данными из справочника
  insertClientData(index) {
    this.application.client_id = this.showSearchClient.clients[index].client_id;
    this.application.client_fio.val = this.showSearchClient.clients[index].client_fio;
    this.application.client_email.val = this.showSearchClient.clients[index].client_email;
    this.application.client_phone.val = this.showSearchClient.clients[index].client_phone;
    this.application.client_number_passport.val = this.showSearchClient.clients[index].client_number_passport;
    this.application.client_where_passport.val = this.showSearchClient.clients[index].client_where_passport;
    this.application.client_date_passport.val = this.showSearchClient.clients[index].client_date_passport;
    this.application.client_address_passport.val = this.showSearchClient.clients[index].client_address_passport;

    this.showSearchClient.show = false;

    this.showSearchClient = {
      show: false,
      filter: '',
      clients: []
    };
  }

  addApplication() {
    for (const value in this.application) {
      if (this.application.hasOwnProperty(value)) {
        if (this.application[value].required && this.application[value].val === '') {
          this.globalParamsMessage.data = {title: `Необходимо заполнить поле "${this.application[value].name}"`, type: 'error', body: ''};
          return false;
        }
      }
    }

    this.applicationsCreateService.addApplication({
      client_id: this.application.client_id,
      equipments: this.application.equipments,
      typeLease: this.application.typeLease.val,
      sale: this.application.sale.val,
      rent_start: this.application.rent_start.val,
      rent_end: this.application.rent_end.val,
      delivery: this.application.delivery.val,
      client_fio: this.application.client_fio.val,
      client_email: this.application.client_email.val,
      client_phone: this.application.client_phone.val,
      client_number_passport: this.application.client_number_passport.val,
      client_where_passport: this.application.client_where_passport.val,
      client_date_passport: this.application.client_date_passport.val,
      client_address_passport: this.application.client_address_passport.val,
      sum: this.application.sum,
      delivery_sum: this.application.delivery_sum,
      comment: this.application.comment,
      source: this.application.source.val,
      status: this.application.status.val
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Заявка успешно добавлена', type: 'success', body: ''};

        this.router.navigate(['/application']);
      },
      (error) => {
        console.log('Ошибка при добавлении новой заявки: ', error);
      });
  }
}
