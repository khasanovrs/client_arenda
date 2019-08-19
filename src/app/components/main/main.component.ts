import {Component, OnInit} from '@angular/core';
import {DopParamsService} from '../../services/dopParams.service';
import {MainService} from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  branches: InterFaceDopParams[] = [];
  current_branch: number = null;
  info: any;

  constructor(private dopParamsService: DopParamsService,
              private mainService: MainService) {
  }

  ngOnInit() {
    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branches = data;

        this.current_branch = this.branches[0].val;

        this.getData();
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });
  }

  getData() {
    this.mainService.getData({
      type: this.current_branch
    }).then((data: any) => {
        this.info = data;
      },
      (error) => {
        console.log('Ошибка при получении информации для рабочего стола: ', error);
      });
  }
}
