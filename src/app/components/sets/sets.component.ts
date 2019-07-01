import {Component, OnInit} from '@angular/core';
import {SetsService} from './sets.service';
import {DopParamsService} from '../../services/dopParams.service';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
})
export class SetsComponent implements OnInit {
  // список статусов
  statusList: InterFaceDopParams[] = [];
  // список филиалов
  branchList: InterFaceDopParams[] = [];
  // список складов
  stocksList: InterFaceDopParams[] = [];
  // список скидок
  discountList: InterFaceDopParams[] = [];
  // список исчтоников
  sourceList: InterFaceDopParams[] = [];
  // права пользователя
  rightsList: InterFaceDopParamsCheckBox[] = [];
  // роли пользователя
  rolesList: InterFaceDopParams[] = [];

  constructor(private setsService: SetsService,
              private dopParamsService: DopParamsService) {
  }

  ngOnInit() {
    this.dopParamsService.getStatus().then((data: InterFaceDopParams[]) => {
        this.statusList = data;
      },
      (error) => {
        console.log('Ошибка при получении статусов: ', error);
      });


    this.dopParamsService.getSource().then((data: InterFaceDopParams[]) => {
        this.sourceList = data;
      },
      (error) => {
        console.log('Ошибка при получении источников: ', error);
      });


    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branchList = data;
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });

    this.dopParamsService.getDiscount().then((data: InterFaceDopParams[]) => {
        this.discountList = data;
      },
      (error) => {
        console.log('Ошибка при получении скидок: ', error);
      });

    this.dopParamsService.getRights().then((data: InterFaceDopParamsCheckBox[]) => {
        this.rightsList = data;
      },
      (error) => {
        console.log('Ошибка при получении прав для пользователя: ', error);
      });

    this.dopParamsService.getRoles().then((data: InterFaceDopParams[]) => {
        this.rolesList = data;
      },
      (error) => {
        console.log('Ошибка при получении ролей: ', error);
      });

    this.dopParamsService.getStock().then((data: InterFaceStocks[]) => {
        this.stocksList = data;
      },
      (error) => {
        console.log('Ошибка при получении складов: ', error);
      });
  }
}
