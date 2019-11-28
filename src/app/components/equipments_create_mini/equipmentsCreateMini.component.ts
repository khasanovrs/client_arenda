import {Component, Input, OnInit} from '@angular/core';
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
  @Input() branch = null;

  newEquipments: InterFaceNewEquipmentsMini = {
    model: '',
    stock: null
  };

  constructor(private equipmentsCreateMiniService: EquipmentsCreateMiniService,
              private dopParamsService: DopParamsService,
              private equipmentsService: EquipmentsService,
              private globalParamsMessage: GlobalParamsMessage) {
  }

  ngOnInit() {
    this.dopParamsService.getStock().then((data: InterFaceStocks[]) => {
        this.stocks = data;
        const tmpStock = this.stocks.filter(item => item.branch_id = this.branch);
        this.newEquipments.stock = tmpStock[0].val;
      },
      (error) => {
        console.log('Ошибка при получении складов: ', error);
      });
  }

  addEquipment() {
    if (this.newEquipments.model === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать наименование', type: 'error', body: ''};
      return false;
    }

    if (this.newEquipments.stock === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать склад', type: 'error', body: ''};
      return false;
    }

    this.equipmentsCreateMiniService.addEquipment({
      model: this.newEquipments.model,
      stock: this.newEquipments.stock,
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Оборудование успешно добавлено', type: 'success', body: ''};
      },
      (error) => {
        console.log('Ошибка при добавлении нового пользователей: ', error);
      });
  }
}

