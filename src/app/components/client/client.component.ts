import {Component, OnInit} from '@angular/core';
import {ClientService} from './client.service';
import {DopParamsService} from '../../services/dopParams.service';
import {Router} from '@angular/router';
import {GlobalParamsClientChangeStatus} from '../client_change_status/global-params-client-change-status';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {
  clients: IClientsUr[] = [];
  p = 1;
  statusList: InterFaceDopParamsColor[] = [];
  sourceList: InterFaceDopParams[] = [];
  branches: InterFaceDopParams[] = [];
  // отображение фильтра
  showFilters = false;
  // отображение фильтра
  showActiveFields = false;
  // параметры фильтра для поиска
  filters: InterFaceFilter = {
    type: 'all',
    like: '',
    source: null,
    status: null,
    branch: null,
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

  sortedData: IClientsUr[];

  constructor(private clientService: ClientService,
              private dopParamsService: DopParamsService,
              private globalParamsClientChangeStatus: GlobalParamsClientChangeStatus,
              private router: Router) {

    this.clientService.refreshClientInfo.subscribe(() => {
      this.getClients();
    });
  }

  ngOnInit() {
    this.dopParamsService.getStatusClient().then((data: InterFaceDopParamsColor[]) => {
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

    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branches = data;
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });

    this.getClients();
  }

  getClients() {
    this.clientService.getClient({
      type: this.filters.type,
      like: this.filters.like,
      source: this.filters.source,
      status: this.filters.status,
      branch: this.filters.branch,
      date_start: this.filters.date_start,
      date_end: this.filters.date_end,
      rentals_start: this.filters.rentals_start,
      rentals_end: this.filters.rentals_end,
      dohod_start: this.filters.dohod_start,
      dohod_end: this.filters.dohod_end,
    }).then((data: IClientsUr[]) => {
        this.clients = data;
        this.sortedData = this.clients.slice();
        this.showFilters = false;
      },
      (error) => {
        console.log('Ошибка при получении списка юр. клиентов: ', error);
      });
  }

  // изменение статуса
  changeStatus(client) {
    this.globalParamsClientChangeStatus.data = {
      show: true,
      old_status: client.old_status,
      new_status: client.new_status,
      text: '',
      client_id: client.id
    };
  }

  // отображение фильтра
  changeShowFilters() {
    this.showFilters = !this.showFilters;
  }

  // отображение активных полей
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
    this.clientService.changeFields({data: this.activeFields}).then(() => {
      },
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
      source: null,
      status: null,
      branch: null,
      date_start: '',
      date_end: '',
      rentals_start: '',
      rentals_end: '',
      dohod_start: '',
      dohod_end: '',
    };

    this.getClients();
  }

  clientDetails(id) {
    this.router.navigate(['/clients/' + id]);
  }

  sortData(sort: Sort) {
    const data = this.clients.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.clients = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'org':
          return compare(a.org, b.org, isAsc);
        case 'fio':
          return compare(a.fio, b.fio, isAsc);
        case 'phone':
          return compare(a.phone, b.phone, isAsc);
        case 'date_create':
          return compare(a.date_create, b.date_create, isAsc);
        case 'last_contact':
          return compare(a.last_contact, b.last_contact, isAsc);
        case 'source':
          return compare(a.source.name, b.source.name, isAsc);
        case 'rentals':
          return compare(a.rentals, b.rentals, isAsc);
        case 'dohod':
          return compare(a.dohod, b.dohod, isAsc);
        case 'sale':
          return compare(a.sale.name, b.sale.name, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
