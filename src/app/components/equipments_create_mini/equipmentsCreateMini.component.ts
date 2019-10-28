import {Component, OnInit} from '@angular/core';
import {EquipmentsCreateMiniService} from './equipmentsCreateMini.service';
import {DopParamsService} from '../../services/dopParams.service';
import {EquipmentsService} from '../equipments/equipments.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';

@Component({
  selector: 'app-equipment-create-mini',
  templateUrl: './equipmentsCreateMini.component.html',
})
export class EquipmentsCreateMiniComponent implements OnInit {
  stocks: InterFaceStocks[] = [];
  equipmentsTypeList: InterFaceDopParams[] = [];
  equipmentsCategoryList: InterEquipmentsCategory[] = [];
  equipmentsMarkList: InterFaceDopParams[] = [];

  newEquipments: InterFaceNewEquipmentsMini = {
    model: '',
    stock: null,
    type: null,
    category: null,
    mark: null
  };

  constructor(private equipmentsCreateService: EquipmentsCreateMiniService,
              private dopParamsService: DopParamsService,
              private equipmentsService: EquipmentsService,
              private globalParamsMessage: GlobalParamsMessage) {
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

    this.equipmentsService.getEquipmentsMark().then((data: InterFaceDopParams[]) => {
        this.equipmentsMarkList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка статусов оборудования: ', error);
      });
  }

  addEquipment() {
    if (this.newEquipments.model === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать наименование', type: 'error', body: ''};
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

    if (this.newEquipments.type === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать тип оборудования', type: 'error', body: ''};
      return false;
    }

    if (this.newEquipments.category === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать категорию оборудования', type: 'error', body: ''};
      return false;
    }

    this.equipmentsCreateService.addEquipment({
      model: this.newEquipments.model,
      stock: this.newEquipments.stock,
      equipmentsType: this.newEquipments.type,
      equipmentsCategory: this.newEquipments.category,
      mark: this.newEquipments.mark,
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Оборудование успешно добавлено', type: 'success', body: ''};
      },
      (error) => {
        console.log('Ошибка при добавлении нового пользователей: ', error);
      });
  }

  changeCategory(data) {
    const arr = this.equipmentsCategoryList.filter(item => item.val === data);
    this.equipmentsTypeList = arr[0].type;
  }
}
