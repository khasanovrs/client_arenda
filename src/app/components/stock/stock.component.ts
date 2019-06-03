import {Component, OnInit} from '@angular/core';
import {DopParamsService} from '../../services/dopParams.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {StockService} from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
})
export class StockComponent implements OnInit {
  branches: InterFaceDopParams[] = [];
  stocks: InterFaceStocks[] = [];

  constructor(private stockService: StockService,
              private dopParamsService: DopParamsService,
              private globalParamsMessage: GlobalParamsMessage) {
  }

  ngOnInit() {
    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branches = data;
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });


    this.dopParamsService.getStock().then((data: InterFaceStocks[]) => {
        this.stocks = data;
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });

  }
}
