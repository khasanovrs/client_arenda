import {Component, OnInit} from '@angular/core';
import {DopParamsService} from '../../services/dopParams.service';
import {StockService} from './stock.service';
import {EquipmentsService} from '../equipments/equipments.service';
import {Router} from '@angular/router';
import {Sort} from '@angular/material/sort';
import {GlobalParamsUser} from '../../storage/global-params-user';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
})
export class StockComponent implements OnInit {
  p = 1;
  stocks: InterFaceStocks[] = [];
  equipmentsTypeList: InterFaceDopParams[] = [];
  equipmentsStatusList: InterFaceDopParamsColor[] = [];
  equipmentsCategoryList: InterEquipmentsCategory[] = [];

  // отображение фильтра
  showFilters = false;
  // отображение фильтра
  showActiveFields = false;

  // список активных полей
  activeFields: InterFaceActiveFields[] = [];
  // список активных полей
  activeFieldsTables = {};

  equipmentsList: InterFaceEquipmentsStock[] = [{
    name: '',
    category: '',
    stock: '',
    type: '',
    status: '',
    selling_price: '',
    price_per_day: '',
    rentals: '',
    repairs: '',
    repairs_sum: '',
    tool_number: '',
    revenue: '',
    profit: '',
    degree_wear: '',
    payback_ratio: '',
    comment: '',
    dop_status: '',
    count: '',
    count_hire: '',
    count_left: ''
  }];

  filters: InterFaceFilterEquipments = {
    status: '4',
    like: '',
    stock: null,
    equipmentsType: null,
    equipmentsCategory: null,
    count_start: null,
    count_end: null,
    selling_price_start: '',
    selling_price_end: '',
    price_per_day_start: '',
    price_per_day_end: '',
    rentals_start: null,
    rentals_end: null,
    repairs_start: null,
    repairs_end: null,
    repairs_sum_start: '',
    repairs_sum_end: '',
    revenue_start: '',
    revenue_end: '',
    profit_start: '',
    profit_end: '',
    degree_wear_start: null,
    degree_wear_end: null,
    confirmed: '',
    lesa: false
  };

  // всплывающее окно
  tooltip = {
    show: false,
    data: {}
  };

  confirmedList = [
    {id: '0', name: 'Нет'},
    {id: '1', name: 'Да'},
  ];

  sortedData: InterFaceEquipmentsStock[];

  constructor(private stockService: StockService,
              private dopParamsService: DopParamsService,
              private equipmentsService: EquipmentsService,
              public globalParamsUser: GlobalParamsUser,
              private router: Router) {
  }

  ngOnInit() {
    this.equipmentsService.getEquipmentsCategory().then((data: InterEquipmentsCategory[]) => {
        this.equipmentsCategoryList = data;

        this.equipmentsTypeList = this.equipmentsCategoryList[0].type;
      },
      (error) => {
        console.log('Ошибка при получении списка категорий оборудования: ', error);
      });
    this.dopParamsService.getStock().then((data: InterFaceStocks[]) => {
        this.stocks = data;
      },
      (error) => {
        console.log('Ошибка при получении складов: ', error);
      });

    this.equipmentsService.getEquipmentsStatus().then((data: InterFaceDopParamsColor[]) => {
        this.equipmentsStatusList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка статусов оборудования: ', error);
      });

    this.equipmentsService.getEquipmentsFields().then((data: InterFaceActiveFields[]) => {
        this.activeFields = data;

        this.changeShowFields();
      },
      (error) => {
        console.log('Ошибка при получении списка полей оборудования: ', error);
      });

    this.getEquipments();
  }

  changeCategory(data) {
    const arr = this.equipmentsCategoryList.filter(item => item.val === data);
    this.equipmentsTypeList = arr[0].type;
  }

  // список оборудования
  changeTypeEquipments(data) {
    this.filters.status = data;
    this.getEquipments();
  }

  // отображение фильтра
  changeShowFilters() {
    this.showFilters = !this.showFilters;
  }

  // отображение фильтра
  changeActiveFields() {
    this.showActiveFields = !this.showActiveFields;
  }

  // изменение прав у нового пользователя
  changeCheckbox(i) {
    this.activeFields[i].flag = this.activeFields[i].flag === 0 ? 1 : 0;
    this.changeShowFields();
  }

  // изменение отображений записекй у полей
  changeShowFields() {
    for (const value of this.activeFields) {
      this.activeFieldsTables[value.code] = value.flag;

      if (['count', 'count_hire', 'count_repairs', 'count_left'].indexOf(value.code) !== -1) {
        this.activeFieldsTables[value.code] = value.flag = !this.filters.lesa ? 0 : 1;
      } else if (['dop_status'].indexOf(value.code) !== -1) {
        this.activeFieldsTables[value.code] = value.flag = this.filters.lesa ? 0 : 1;
      }
    }
  }

  // изменение списка активных полей
  changeFields() {
    this.equipmentsService.changeFields({data: this.activeFields}).then(() => {
        this.showActiveFields = false;
      },
      () => {
        console.log('Ошибка при изменение списка отображаемых полей');
      });
  }

  // получение списка оборудования
  getEquipments() {
    this.equipmentsService.getEquipments({
      like: this.filters.like,
      stock: this.filters.stock,
      equipmentsType: this.filters.equipmentsType,
      equipmentsCategory: this.filters.equipmentsCategory,
      status: this.filters.status,
      count_start: this.filters.count_start,
      count_end: this.filters.count_end,
      selling_price_start: this.filters.selling_price_start,
      selling_price_end: this.filters.selling_price_end,
      price_per_day_start: this.filters.price_per_day_start,
      price_per_day_end: this.filters.price_per_day_end,
      rentals_start: this.filters.rentals_start,
      rentals_end: this.filters.rentals_end,
      repairs_start: this.filters.repairs_start,
      repairs_end: this.filters.repairs_end,
      repairs_sum_start: this.filters.repairs_sum_start,
      repairs_sum_end: this.filters.repairs_sum_end,
      revenue_start: this.filters.revenue_start,
      revenue_end: this.filters.revenue_end,
      profit_start: this.filters.profit_start,
      profit_end: this.filters.profit_end,
      degree_wear_start: this.filters.degree_wear_start,
      degree_wear_end: this.filters.degree_wear_end,
      confirmed: this.filters.confirmed,
      lesa: this.filters.lesa
    }).then((data: InterFaceEquipmentsStock[]) => {
        this.equipmentsList = data;
        this.sortedData = this.equipmentsList.slice();
        this.showFilters = false;
      },
      (error) => {
        console.log('Ошибка при получении списка оборудований: ', error);
      });
  }

  // очистка фильтра
  clearFilter() {
    this.filters = {
      like: '',
      stock: null,
      equipmentsType: null,
      equipmentsCategory: null,
      status: '',
      count_start: null,
      count_end: null,
      selling_price_start: '',
      selling_price_end: '',
      price_per_day_start: '',
      price_per_day_end: '',
      rentals_start: null,
      rentals_end: null,
      repairs_start: null,
      repairs_end: null,
      repairs_sum_start: '',
      repairs_sum_end: '',
      revenue_start: '',
      revenue_end: '',
      profit_start: '',
      profit_end: '',
      degree_wear_start: null,
      degree_wear_end: null,
      confirmed: '',
      lesa: false
    };

    this.getEquipments();
  }

  equipmentDetails(index) {
    this.router.navigate(['/equipments/' + index]);
  }

  mouseEnter(data) {
    return `Статус : ${data.status}`;
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
        case 'category':
          return compare(a.category, b.category, isAsc);
        case 'stock':
          return compare(a.stock, b.stock, isAsc);
        case 'type':
          return compare(a.type, b.type, isAsc);
        case 'status':
          return compare(a.status, b.status, isAsc);
        case 'selling_price':
          return compare(a.selling_price, b.selling_price, isAsc);
        case 'price_per_day':
          return compare(a.price_per_day, b.price_per_day, isAsc);
        case 'rentals':
          return compare(a.rentals, b.rentals, isAsc);
        case 'repairs':
          return compare(a.repairs, b.repairs, isAsc);
        case 'repairs_sum':
          return compare(a.repairs_sum, b.repairs_sum, isAsc);
        case 'tool_number':
          return compare(a.tool_number, b.tool_number, isAsc);
        case 'revenue':
          return compare(a.revenue, b.revenue, isAsc);
        case 'profit':
          return compare(a.profit, b.profit, isAsc);
        case 'degree_wear':
          return compare(a.degree_wear, b.degree_wear, isAsc);
        case 'payback_ratio':
          return compare(a.payback_ratio, b.payback_ratio, isAsc);
        default:
          return 0;
      }
    });
  }

  // показаывать все оборудования или леса
  changeEquipments(data) {
    this.filters.lesa = data;
    this.changeShowFields();
    this.getEquipments();
  }
}


function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
