import {Component, OnInit} from '@angular/core';
import {DopParamsService} from '../../services/dopParams.service';
import {EquipmentsService} from '../equipments/equipments.service';
import {Sort} from '@angular/material/sort';
import {GlobalParamsUser} from '../../storage/global-params-user';
import {StockService} from '../stock/stock.service';
import {EquipmentsCreateMiniService} from '../equipments_create_mini/equipmentsCreateMini.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-demand-info',
  templateUrl: './demand_info.component.html',
})
export class DemandInfoComponent implements OnInit {

  eq_id = null;
  demandInfo: InterFaceInfoEquipmentsDemand = {
    id: null,
    name: '',
    count_demand: null
  };

  constructor(private activatedRoute: ActivatedRoute,
              private equipmentsService: EquipmentsService,
              private router: Router,) {
    this.activatedRoute.params.subscribe(
      (params: Params): void => {
        this.eq_id = params.id;
      }
    );
  }

  ngOnInit() {
    this.equipmentsService.getDemandInfo({id: this.eq_id}).then((data: InterFaceInfoEquipmentsDemand) => {
        console.log(data);
        this.demandInfo = data;
      },
      (error) => {
        console.log('Ошибка при получении статусов: ', error);
      });
  }

  save() {
    this.equipmentsService.saveEqDemand({id: this.demandInfo.id, name: this.demandInfo.name}).then(() => {
        this.router.navigate(['/demand/']);
      },
      (error) => {
        console.log('Ошибка при сохранении оборудования для спроса: ', error);
      });
  }
}
