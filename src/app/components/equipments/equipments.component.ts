import {Component, OnInit} from '@angular/core';
import {DopParamsService} from '../../services/dopParams.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {EquipmentsService} from './equipments.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipments.component.html',
})
export class EquipmentsComponent implements OnInit {
  stocks: InterFaceStocks[] = [];
  equipmentsTypeList: InterFaceDopParams[] = [];
  equipmentsCategoryList: InterEquipmentsCategory[] = [];
  equipmentsStatusList: InterFaceDopParams[] = [];
  discounts: InterFaceDopParams[] = [];
  equipmentsMarkList: InterFaceDopParams[] = [];
  equipmentId: null;

  // причина изменения склада
  reason_change_stock = '';

  equipment: InterFaceInfoEquipments = {
    id: null,
    model: '',
    status: '',
    old_stock: null,
    new_stock: null,
    discount: null,
    type: null,
    category: null,
    tool_number: null,
    count: null,
    mark: null,
    selling_price: '',
    price_per_day: '',
    photo: '',
    photo_alias: '',
    rentals: 0,
    repairs: 0,
    repairs_sum: '0',
    revenue: '0',
    profit: '0',
    degree_wear: 0,
    payback_ratio: 0,
    power_energy: '',
    length: '',
    network_cord: '',
    power: '',
    frequency_hits: '',
    comment: '',
    change_history: [{
      date: '',
      new_params: '',
      old_params: '',
      type: '',
      reason: '',
      user: '',
    }]
  };

  constructor(private dopParamsService: DopParamsService,
              private equipmentsService: EquipmentsService,
              private globalParamsMessage: GlobalParamsMessage,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.params.subscribe(
      (params: Params): void => {
        this.equipmentId = params.id;
      }
    );
  }

  ngOnInit() {
    this.dopParamsService.getStock().then((data: InterFaceStocks[]) => {
        this.stocks = data;
      },
      (error) => {
        console.log('Ошибка при получении складов: ', error);
      });

    this.equipmentsService.getEquipmentsCategory().then((data: InterEquipmentsCategory[]) => {
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

    this.equipmentsService.getEquipmentInfo({equipmentId: this.equipmentId}).then((data: InterFaceInfoEquipments) => {
        this.equipment = data;
        this.changeCategory(this.equipment.type);
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по клиенту: ', error);
      });
  }

  updateEquipment() {
    if (this.equipment.model === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать наименование', type: 'error', body: ''};
      return false;
    }

    if (this.equipment.status === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать статус', type: 'error', body: ''};
      return false;
    }

    if (this.equipment.mark === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать марку', type: 'error', body: ''};
      return false;
    }

    if (this.equipment.new_stock === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать склад', type: 'error', body: ''};
      return false;
    }

    if (this.equipment.type === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать тип оборудования', type: 'error', body: ''};
      return false;
    }

    if (this.equipment.category === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать категорию оборудования', type: 'error', body: ''};
      return false;
    }

    if (this.equipment.count === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать количество оборудования', type: 'error', body: ''};
      return false;
    }

    if (this.equipment.tool_number === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать номер оборудования', type: 'error', body: ''};
      return false;
    }

    if (this.reason_change_stock === '' && this.equipment.new_stock !== this.equipment.old_stock) {
      this.globalParamsMessage.data = {title: 'Необходимо указать причину изменения склада', type: 'error', body: ''};
      return false;
    }

    this.equipmentsService.updateEquipment({
      id: this.equipment.id,
      model: this.equipment.model,
      new_stock: this.equipment.new_stock,
      old_stock: this.equipment.old_stock,
      reason_change_stock: this.reason_change_stock,
      discount: this.equipment.discount,
      equipmentsType: this.equipment.type,
      equipmentsCategory: this.equipment.category,
      tool_number: this.equipment.tool_number,
      count: this.equipment.count,
      mark: this.equipment.mark,
      selling_price: this.equipment.selling_price,
      price_per_day: this.equipment.price_per_day,
      rentals: this.equipment.rentals,
      repairs: this.equipment.repairs,
      repairs_sum: this.equipment.repairs_sum,
      revenue: this.equipment.revenue,
      profit: this.equipment.profit,
      degree_wear: this.equipment.degree_wear,
      payback_ratio: this.equipment.payback_ratio,
      power_energy: this.equipment.power_energy,
      length: this.equipment.length,
      network_cord: this.equipment.network_cord,
      power: this.equipment.power,
      frequency_hits: this.equipment.frequency_hits,
      photo_alias: this.equipment.photo_alias,
      comment: this.equipment.comment
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Оборудование успешно изменено', type: 'success', body: ''};

        this.router.navigate(['/stock']);
      },
      (error) => {
        console.log('Ошибка при изменении оборудования: ', error);
      });
  }

  changeCategory(data) {
    const arr = this.equipmentsCategoryList.filter(item => item.val === data);
    this.equipmentsTypeList = arr[0].type;
  }
}
