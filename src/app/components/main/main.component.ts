import {Component, OnInit} from '@angular/core';
import {DopParamsService} from '../../services/dopParams.service';
import {EquipmentsService} from '../equipments/equipments.service';
import {MainService} from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  date = new Date().toISOString().split('T')[0];


  branches: InterFaceDopParams[] = [];
  filter: InterFaceMainFilter = {
    branch: null,
    date_start: this.date,
    date_end: this.date,
  };
  incomes: InterFaceMainIncomes[] = [];
  equipments: InterFaceMainEquipments[] = [];


  constructor(private dopParamsService: DopParamsService,
              private equipmentsService: EquipmentsService,
              private mainService: MainService) {
  }

  ngOnInit() {
    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branches = data;
        this.filter.branch = this.branches[0].val;
        this.getData();
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });
  }

  changeBranch() {
    this.getData();
  }

  getData() {
    this.mainService.getData({
      branch: this.filter.branch,
      date_start: this.filter.date_start,
      date_end: this.filter.date_end
    }).then((data: any) => {
        this.incomes = Object.keys(data.income).map(i => data.income[i]);
        this.equipments = data.equipments;
      },
      (error) => {
        console.log('Ошибка при получении информации для рабочего стола: ', error);
      });
  }
}
