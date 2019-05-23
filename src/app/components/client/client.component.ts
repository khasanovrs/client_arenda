import {Component, OnInit} from '@angular/core';
import {ClientService} from './client.service';
import {DopParamsService} from '../../services/dopParams.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {
  clientsUr: IClientsUr[];
  p = 1;
  statusList: InterFaceDopParams[] = [];
  sourceList: InterFaceDopParams[] = [];
  // переменная для поиска клиентов
  searchVar = '';

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

    this.clientService.getClientUr().then((data: IClientsUr[]) => {
        this.clientsUr = data;
      },
      (error) => {
        console.log('Ошибка при получении списка юр. клиентов: ', error);
      });
  }

  // вывод клиентов по поиску
  searchUrClient(searchVar) {
    this.clientService.searchClientUr({name: searchVar}).then((data: IClientsUr[]) => {
        this.clientsUr = data;
      },
      (error) => {
        console.log('Ошибка при поиске клиентов юр. клиентов: ', error);
      });
  }

  // изменение статуса
  changeStatus(client) {
    this.clientService.updateStatusClientUr({client_id: client.id, client_status: client.status}).then((data: IClientsUr[]) => {
        this.clientsUr = data;
      },
      (error) => {
        console.log('Ошибка при изменении статуса у юр. клиента: ', error);
      });
  }

}
