import {Component, OnInit} from '@angular/core';
import {EquipmentsCreateService} from './equipmentsCreate.service';
import {DopParamsService} from '../../services/dopParams.service';
import {EquipmentsService} from '../equipments/equipments.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {Router} from '@angular/router';

@Component({
  selector: 'app-equipment-create',
  templateUrl: './equipmentsCreate.component.html',
})
export class EquipmentsCreateComponent implements OnInit {
  stocks: InterFaceStocks[] = [];
  equipmentsTypeList: InterFaceDopParams[] = [];
  equipmentsCategoryList: InterFaceDopParams[] = [];
  equipmentsStatusList: InterFaceDopParams[] = [];
  // список скидок
  discounts: InterFaceDopParams[] = [];

  newEquipments: InterFacenewEquipments = {
    name: '',
    status: '',
    stock: null,
    sale: null,
    equipmentsType: null,
    equipmentsCategory: null,
    tool_number: null,
    count: null,
    selling_price: '',
    price_per_day: '',
    rentals: null,
    repairs: null,
    repairs_sum: '',
    revenue: '',
    profit: '',
    degree_wear: null,
  };

  constructor(private equipmentsCreateService: EquipmentsCreateService,
              private dopParamsService: DopParamsService,
              private equipmentsService: EquipmentsService,
              private globalParamsMessage: GlobalParamsMessage,
              private router: Router) {
  }

  ngOnInit() {
    this.dopParamsService.getStock().then((data: InterFaceStocks[]) => {
        this.stocks = data;
      },
      (error) => {
        console.log('Ошибка при получении складов: ', error);
      });

    this.equipmentsService.getEquipmentsType().then((data: InterFaceDopParams[]) => {
        this.equipmentsTypeList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка типов оборудования: ', error);
      });

    this.equipmentsService.getEquipmentsCategory().then((data: InterFaceDopParams[]) => {
        this.equipmentsCategoryList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка категорий оборудования: ', error);
      });

    this.equipmentsService.getEquipmentsStatus().then((data: InterFaceDopParams[]) => {
        this.equipmentsStatusList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка статусов оборудования: ', error);
      });

    this.dopParamsService.getDiscount().then((data: InterFaceDopParams[]) => {
        this.discounts = data;
      },
      (error) => {
        console.log('Ошибка при получении списка скидок: ', error);
      });
  }

  addEquipment() {
    if (this.newEquipments.name === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать наименование', type: 'error', body: ''};
      return false;
    }

    if (this.newEquipments.status === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать статус', type: 'error', body: ''};
      return false;
    }

    if (this.newEquipments.stock === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать склад', type: 'error', body: ''};
      return false;
    }

    if (this.newEquipments.equipmentsType === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать тип оборудования', type: 'error', body: ''};
      return false;
    }

    if (this.newEquipments.equipmentsCategory === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать категорию оборудования', type: 'error', body: ''};
      return false;
    }

    if (this.newEquipments.count === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать количество оборудования', type: 'error', body: ''};
      return false;
    }

    if (this.newEquipments.tool_number === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать номер оборудования', type: 'error', body: ''};
      return false;
    }

    this.equipmentsCreateService.addEquipment({
      name: this.newEquipments.name,
      status: this.newEquipments.status,
      stock: this.newEquipments.stock,
      sale: this.newEquipments.sale,
      equipmentsType: this.newEquipments.equipmentsType,
      equipmentsCategory: this.newEquipments.equipmentsCategory,
      count: this.newEquipments.count,
      tool_number: this.newEquipments.tool_number,
      selling_price: this.newEquipments.selling_price,
      price_per_day: this.newEquipments.price_per_day,
      revenue: this.newEquipments.revenue,
      degree_wear: this.newEquipments.degree_wear
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Оборудование успешно добавлено', type: 'success', body: ''};

        this.router.navigate(['/stock']);
      },
      (error) => {
        console.log('Ошибка при добавлении нового пользователей: ', error);
      });
  }
}
