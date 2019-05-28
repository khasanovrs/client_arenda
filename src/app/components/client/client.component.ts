import {Component, OnInit} from '@angular/core';
import {ClientService} from './client.service';
import {DopParamsService} from '../../services/dopParams.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {
  clients: IClientsUr[] = [];
  p = 1;
  statusList: InterFaceDopParams[] = [];
  sourceList: InterFaceDopParams[] = [];
  // отображение фильтра
  showFilters = false;
  // отображение фильтра
  showActiveFields = false;
  // параметры фильтра для поиска
  filters: InterFaceFilter = {
    type: 'all',
    like: '',
    source: {val: null, name: ''},
    status: {val: null, name: ''},
    date_start: '',
    date_end: '',
    rentals_start: '',
    rentals_end: '',
    dohod_start: '',
    dohod_end: '',
  };
  // список активных полей
  activeFields: InterFaceActiveFields[] = [];
  // список активных полей
  activeFieldsTables = {};

  constructor(private clientService: ClientService,
              private dopParamsService: DopParamsService) {
  }

  ngOnInit() {
    this.dopParamsService.getStatus().then((data: InterFaceDopParams[]) => {
        this.statusList = data;
      },
      (error) => {
        console.log('Ошибка при получении статусов: ', error);
      });

    this.dopParamsService.getSource().then((data: InterFaceDopParams[]) => {
        this.sourceList = data;
      },
      (error) => {
        console.log('Ошибка при получении источников: ', error);
      });


    this.clientService.getActiveFields().then((data: InterFaceActiveFields[]) => {
        this.activeFields = data;

        this.changeShowFields();
      },
      (error) => {
        console.log('Ошибка при получении источников: ', error);
      });

    this.getClients();
  }

  getClients() {
    this.clientService.getClient({
      type: this.filters.type,
      like: this.filters.like,
      source: this.filters.source.val,
      status: this.filters.status.val,
      date_start: this.filters.date_start,
      date_end: this.filters.date_end,
      rentals_start: this.filters.rentals_start,
      rentals_end: this.filters.rentals_end,
      dohod_start: this.filters.dohod_start,
      dohod_end: this.filters.dohod_end,
    }).then((data: IClientsUr[]) => {
        this.clients = data;
      },
      (error) => {
        console.log('Ошибка при получении списка юр. клиентов: ', error);
      });
  }

  // изменение статуса
  changeStatus(client) {
    this.clientService.updateStatusClientUr({client_type: client.type, client_id: client.id, client_status: client.status}).then(() => {
      },
      (error) => {
        console.log('Ошибка при изменении статуса у юр. клиента: ', error);
      });
  }

  // отображение фильтра
  changeShowFilters() {
    this.showFilters = !this.showFilters;
  }

  // отображение фильтра
  changeActiveFields() {
    this.showActiveFields = !this.showActiveFields;
  }

  // список клиентов
  changeTypeClients(data) {
    this.filters.type = data;
    this.getClients();
  }

  // изменение прав у нового пользователя
  changeCheckbox(i) {
    this.activeFields[i].flag = this.activeFields[i].flag === 0 ? 1 : 0;
    this.changeShowFields();
  }

  // изменение списка активных полей
  changeFields() {
    this.clientService.changeFields({data: this.activeFields}).then(() => {},
      () => {
        console.log('Ошибка при изменение списка отображаемых полей');
      });
  }

  // изменение отображений записекй у полей
  changeShowFields() {
    for (const value of this.activeFields) {
      this.activeFieldsTables[value.code] = value.flag;
    }
  }

  // очистка фильтра
  clearFilter() {
    this.filters = {
      type: 'all',
      like: '',
      source: {val: null, name: ''},
      status: {val: null, name: ''},
      date_start: '',
      date_end: '',
      rentals_start: '',
      rentals_end: '',
      dohod_start: '',
      dohod_end: '',
    };

    this.getClients();
  }
}
