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
  discounts: InterFaceDopParams[] = [];
  equipmentsMarkList: InterFaceDopParams[] = [];

  newEquipments: InterFacenewEquipments = {
    model: '',
    status: '',
    stock: null,
    discount: null,
    equipmentsType: null,
    equipmentsCategory: null,
    tool_number: null,
    count: null,
    mark: null,
    selling_price: '',
    price_per_day: '',
    rentals: 0,
    repairs: 0,
    repairs_sum: '0',
    revenue: '0',
    profit: '0',
    degree_wear: 0,
    payback_ratio: 0
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

    this.equipmentsService.getEquipmentsMark().then((data: InterFaceDopParams[]) => {
        this.equipmentsMarkList = data;
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
    if (this.newEquipments.model === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать наименование', type: 'error', body: ''};
      return false;
    }

    if (this.newEquipments.status === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать статус', type: 'error', body: ''};
      return false;
    }

    if (this.newEquipments.mark === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать марку', type: 'error', body: ''};
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
      model: this.newEquipments.model,
      status: this.newEquipments.status,
      stock: this.newEquipments.stock,
      discount: this.newEquipments.discount,
      equipmentsType: this.newEquipments.equipmentsType,
      equipmentsCategory: this.newEquipments.equipmentsCategory,
      tool_number: this.newEquipments.tool_number,
      count: this.newEquipments.count,
      mark: this.newEquipments.mark,
      selling_price: this.newEquipments.selling_price,
      price_per_day: this.newEquipments.price_per_day,
      rentals: this.newEquipments.rentals,
      repairs: this.newEquipments.repairs,
      repairs_sum: this.newEquipments.repairs_sum,
      revenue: this.newEquipments.revenue,
      profit: this.newEquipments.profit,
      degree_wear: this.newEquipments.degree_wear,
      payback_ratio: this.newEquipments.payback_ratio
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Оборудование успешно добавлено', type: 'success', body: ''};

        this.router.navigate(['/stock']);
      },
      (error) => {
        console.log('Ошибка при добавлении нового пользователей: ', error);
      });
  }
}
