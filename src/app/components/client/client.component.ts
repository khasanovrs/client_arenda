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
  filters = {
    type: 'all',
    like: ''
  };

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

    this.getClients();
  }

  getClients() {
    this.clientService.getClient(this.filters).then((data: IClientsUr[]) => {
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
}
