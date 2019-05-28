import {Component, OnInit} from '@angular/core';
import {ClientCreateService} from './clientCreate.service';
import {DopParamsService} from '../../services/dopParams.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './clientCreate.component.html',
})
export class ClientCreateComponent implements OnInit {
  statusList: InterFaceDopParams[] = [];
  // список филиалов
  branches: InterFaceDopParams[] = [];
  newClient: InterFaceNewClient = {
    sale: '',
    branch: {val: null, name: ''},
    status: {val: null, name: ''},
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
    phone_2: ''
  };

  constructor(private clientCreateService: ClientCreateService,
              private dopParamsService: DopParamsService) {
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
  }
}
