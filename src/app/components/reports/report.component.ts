import {Component, OnInit} from '@angular/core';
import {ReportService} from './report.service';
import {DopParamsService} from '../../services/dopParams.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
})
export class ReportComponent implements OnInit {
  p = 1;
  branches: InterFaceDopParams[] = [];

  filters = {
    branch: null,
    type: 1
  };

  equipments: InterFaceReportEquipment[] = [];
  widgets: InterFaceReportWidget[] = [];

  constructor(private reportService: ReportService,
              private dopParamsService: DopParamsService) {
  }

  ngOnInit() {
    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branches = data;

        this.filters.branch = this.branches[0].val;
        this.getFilterEquipments();
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });

    this.reportService.getWidgets().then((data: any) => {
        this.widgets = data;
      },
      (error) => {
        console.log('Ошибка при получении списка виджетов: ', error);
      });
  }

  // список клиентов
  changeTypeFilter(data) {
    this.filters.type = data;
    this.getFilterEquipments();
  }

  // получение списка товаров
  getFilterEquipments() {
    this.reportService.getEquipments({
      type: this.filters.type,
      branch: this.filters.branch
    }).then((data: any) => {
        this.equipments = data;
      },
      (error) => {
        console.log('Ошибка при получении списка оборудования: ', error);
      });
  }
}
