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
  newEquipments: InterFaceNewEquipmentsMini = {
    model: ''
  };

  constructor(private equipmentsCreateMiniService: EquipmentsCreateMiniService,
              private dopParamsService: DopParamsService,
              private equipmentsService: EquipmentsService,
              private globalParamsMessage: GlobalParamsMessage) {
  }

  ngOnInit() {

  }

  addEquipment() {
    if (this.newEquipments.model === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать наименование', type: 'error', body: ''};
      return false;
    }

    this.equipmentsCreateMiniService.addEquipment({
      model: this.newEquipments.model,
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Оборудование успешно добавлено', type: 'success', body: ''};
      },
      (error) => {
        console.log('Ошибка при добавлении нового пользователей: ', error);
      });
  }
}

