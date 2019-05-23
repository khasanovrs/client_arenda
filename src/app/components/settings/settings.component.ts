import {Component, OnInit} from '@angular/core';
import {SettingsService} from './settings.service';
import {DopParamsService} from '../../services/dopParams.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  branch: InterFaceDopParams[] = [];

  constructor(private settingsService: SettingsService,
              private dopParamsService: DopParamsService) {
  }

  ngOnInit() {
    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branch = data;
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });
  }
}
