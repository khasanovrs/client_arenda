import {Component, OnInit} from '@angular/core';
import {ClientService} from './client.service';
import {DopParamsService} from '../../services/dopParams.service';
import {map, filter} from 'rxjs/operators';

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

        // const arr = data.filter(item => item.flag === 1);
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

  // изменение списка активных полей
  changeFields() {
    this.clientService.changeFields(this.showActiveFields).then(() => {
      },
      () => {
        console.log('Ошибка при изменение списка отображаемых полей');
      });
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
