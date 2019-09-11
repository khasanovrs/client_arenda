import {Component, OnInit} from '@angular/core';
import {DopParamsService} from '../../services/dopParams.service';
import {EquipmentsService} from '../equipments/equipments.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  branches: InterFaceDopParams[] = [];
  current_branch: number = null;
  info: any;
  equipments: InterFaceMainEquipments[];

  constructor(private dopParamsService: DopParamsService,
              private equipmentsService: EquipmentsService) {
  }

  ngOnInit() {
    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branches = data;
        this.current_branch = this.branches[0].val;
        //this.getData();
        this.getEquipments();
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });
  }

  /*getData() {
    this.mainService.getData({
      type: this.current_branch
    }).then((data: any) => {
        this.info = data;
      },
      (error) => {
        console.log('Ошибка при получении информации для рабочего стола: ', error);
      });
  }*/

  getEquipments() {
    this.equipmentsService.getEquipmentsBranch({
      branch: this.current_branch
    }).then((data: InterFaceMainEquipments[]) => {
        this.equipments = data;
      },
      (error) => {
        console.log('Ошибка при получении списка оборудования: ', error);
      });
  }
}
