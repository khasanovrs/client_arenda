import {Component, OnInit} from '@angular/core';
import {DopParamsService} from '../../services/dopParams.service';
import {EquipmentsService} from '../equipments/equipments.service';
import {ClientService} from '../client/client.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ApplicationsCreateService} from '../applications-create/applicationsCreate.service';
import {ApplicationsService} from '../applications/applications.service';
import {GlobalPayList} from '../pay_list/global-pay-list';
import {GlobalParamsPay} from '../pay/global-params-pay';

@Component({
  selector: 'app-applications-info',
  templateUrl: './applicationsInfo.component.html',
})
export class ApplicationsInfoComponent implements OnInit {
  applicationsStatus: InterFaceDopParams[] = [];
  applicationsSource: InterFaceDopParams[] = [];
  applicationsDelivery: InterFaceDopParams[] = [];
  applicationsTypeLeases: InterFaceDopParams[] = [];
  equipmentsTypeList: InterFaceDopParams[] = [];
  branches: InterFaceDopParams[] = [];
  discounts: InterFaceDopParams[] = [];
  // идентификатор клиента
  applicationId: null;
  // заявка
  application: InterFaceApplicationInfo = {
    id: null,
    branch: {val: null, required: true, name: ''},
    delivery: {val: null, required: true, name: ''},
    typeLease: {val: null, required: true, name: ''},
    sale: {val: null, required: true, name: ''},
    source: {val: null, required: true, name: ''},
    comment: '',
    rent_start: {val: null, required: true, name: ''},
    rent_end: {val: null, required: true, name: ''},
    client_id: null,
    client_fio: '',
    client_phone: '',
    delivery_sum: '',
    sum: '',
    equipments: {
      id: null,
      name: '',
      count: null,
      status: null,
      photo: '',
      photo_alias: '',
      price: '',
      stock: null
    },
    pay_list: [{
      'date': null,
      'user_id': null,
      'sum': ''
    }]
  };

  constructor(private applicationsCreateService: ApplicationsCreateService,
              private dopParamsService: DopParamsService,
              private equipmentsService: EquipmentsService,
              private clientService: ClientService,
              private globalParamsMessage: GlobalParamsMessage,
              private activatedRoute: ActivatedRoute,
              private applicationsService: ApplicationsService,
              private globalPayList: GlobalPayList,
              private globalParamsPay: GlobalParamsPay,
              private router: Router) {

    this.activatedRoute.params.subscribe(
      (params: Params): void => {
        this.applicationId = params.id;
      }
    );

  }

  ngOnInit() {
    this.applicationsService.getApplicationsStatus().then((data: InterFaceDopParams[]) => {
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

    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branches = data;
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });

    this.applicationsService.getApplicationInfo({applicationId: this.applicationId}).then((data: any) => {
        this.application.id = data.id;
        this.application.branch.val = data.branch;
        this.application.delivery.val = data.delivery;
        this.application.typeLease.val = data.typeLease;
        this.application.sale.val = data.sale;
        this.application.source.val = data.source;
        this.application.comment = data.comment;
        this.application.rent_start.val = data.rent_start;
        this.application.rent_end.val = data.rent_end;
        this.application.client_id = data.client_id;
        this.application.client_fio = data.client_fio;
        this.application.client_phone = data.client_phone;
        this.application.delivery_sum = data.delivery_sum;
        this.application.equipments = data.equipments;
        this.application.sum = data.sum;
        this.application.pay_list = data.pay_list;
        this.globalPayList.data.pay_list = this.application.pay_list;
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по клиенту: ', error);
      });
  }

  showInsertSum() {
    this.globalParamsPay.data = {show: true, sum: '', eq_id: this.application.equipments.id};
  }

  open_pay_list() {
    this.globalPayList.data.show = true;
  }
}
