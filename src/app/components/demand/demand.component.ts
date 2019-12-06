import {Component, OnInit} from '@angular/core';
import {DopParamsService} from '../../services/dopParams.service';
import {EquipmentsService} from '../equipments/equipments.service';
import {Sort} from '@angular/material/sort';
import {GlobalParamsUser} from '../../storage/global-params-user';
import {StockService} from '../stock/stock.service';
import {EquipmentsCreateMiniService} from '../equipments_create_mini/equipmentsCreateMini.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './demand.component.html',
})
export class DemandComponent implements OnInit {
  p = 1;
  stocks: InterFaceStocks[] = [];

  equipmentsList: InterFaceEquipmentsDemandStock[] = [{
    id: null,
    name: '',
    stock: '',
    count_demand: null,
    user: '',
    client: '',
    coment: '',
    branch: '',
    date_create: '',
    checked: false
  }];

  // массив для объединения
  unification = [];

  // список названий
  unificationList = [];

  // показ формы для объединения
  showUnification = false;

  // тип отображения,заявки или оборудования
  type = 'eq';

  // отображение окна добавления нового оборудования
  addNewEquipments = {
    show: false,
  };

  filters: InterFaceFilterEquipmentsDemand = {
    like: '',
    stock: null
  };

  sortedData: InterFaceEquipmentsDemandStock[];

  // название при объединении
  new_name = '';

  // список активных полей
  activeFields: InterFaceActiveFields[] = [];
  // список активных полей
  activeFieldsTables = {};

  constructor(private stockService: StockService,
              private dopParamsService: DopParamsService,
              private equipmentsService: EquipmentsService,
              private equipmentsCreateMiniService: EquipmentsCreateMiniService,
              private router: Router,
              public globalParamsUser: GlobalParamsUser) {

    this.equipmentsCreateMiniService.closeModalAddEq.subscribe(() => {
      this.addNewEquipments.show = false;
      this.getEquipments();
    });
  }

  ngOnInit() {
    this.dopParamsService.getStock().then((data: InterFaceStocks[]) => {
        this.stocks = data;
      },
      (error) => {
        console.log('Ошибка при получении складов: ', error);
      });

    this.equipmentsService.getEquipmentsDemandFields().then((data: InterFaceActiveFields[]) => {
        this.activeFields = data;
        this.changeShowFields();
      },
      (error) => {
        console.log('Ошибка при получении списка полей оборудования: ', error);
      });

    this.getEquipments();
  }

  // изменение отображений записекй у полей
  changeShowFields() {
    for (const value of this.activeFields) {
      this.activeFieldsTables[value.code] = value.flag = 1;

      if (['user', 'client', 'coment', 'date_create', 'stock'].indexOf(value.code) !== -1 && this.type === 'eq') {
        this.activeFieldsTables[value.code] = value.flag = 0;
      }

      if (value.code === 'count_demand' && this.type === 'hire') {
        this.activeFieldsTables[value.code] = value.flag = 0;
      }
    }
  }

  // получение списка оборудования
  getEquipments() {
    this.equipmentsService.getEquipmentsDemand({
      like: this.filters.like,
      type: this.type,
      stock: this.filters.stock,
    }).then((data: InterFaceEquipmentsDemandStock[]) => {
        this.equipmentsList = data;
        this.sortedData = this.equipmentsList.slice();
      },
      (error) => {
        console.log('Ошибка при получении списка оборудований: ', error);
      });
  }

  // очистка фильтра
  clearFilter() {
    this.filters = {
      like: '',
      stock: null
    };

    this.getEquipments();
  }

  sortData(sort: Sort) {
    const data = this.equipmentsList.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.equipmentsList = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'stock':
          return compare(a.stock, b.stock, isAsc);
        default:
          return 0;
      }
    });
  }

  // изменение типа
  changeType(data) {
    this.type = data;
    this.getEquipments();
    this.changeShowFields();
  }

  // переход на детальную информацию
  demandDetails(id) {
    this.router.navigate(['/demand/' + id]);
  }

  checkedChange(data) {
    const ss = this.unification.indexOf(data.id);
    if (ss === -1) {
      this.unification.push(data.id);
    } else {
      this.unification.splice(ss, 1);
    }
  }

  changeShowUnification() {
    this.unificationList = this.equipmentsList.filter(item => this.unification.indexOf(item.id) !== -1);
    this.showUnification = true;
  }
}


function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
