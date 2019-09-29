import {Component, OnInit} from '@angular/core';
import {DopParamsService} from '../../services/dopParams.service';
import {StockService} from './stock.service';
import {EquipmentsService} from '../equipments/equipments.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
})
export class StockComponent implements OnInit {
  p = 1;
  stocks: InterFaceStocks[] = [];
  equipmentsTypeList: InterFaceDopParams[] = [];
  equipmentsCategoryList: InterFaceDopParams[] = [];
  equipmentsStatusList: InterFaceDopParamsColor[] = [];

  // отображение фильтра
  showFilters = false;
  // отображение фильтра
  showActiveFields = false;

  // список активных полей
  activeFields: InterFaceActiveFields[] = [];
  // список активных полей
  activeFieldsTables = {};

  equipmentsList: any = [];
  filters: InterFaceFilterEquipments = {
    status: '',
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
  };

  // всплывающее окно
  tooltip = {
    show: false,
    data: {}
  };

  constructor(private stockService: StockService,
              private dopParamsService: DopParamsService,
              private equipmentsService: EquipmentsService,
              private router: Router) {
  }

  ngOnInit() {
    this.dopParamsService.getStock().then((data: InterFaceStocks[]) => {
        this.stocks = data;
      },
      (error) => {
        console.log('Ошибка при получении складов: ', error);
      });

    this.equipmentsService.getEquipmentsType().then((data: InterFaceDopParams[]) => {
        this.equipmentsTypeList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка типов оборудования: ', error);
      });

    this.equipmentsService.getEquipmentsCategory().then((data: InterFaceDopParams[]) => {
        this.equipmentsCategoryList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка категорий оборудования: ', error);
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
    }).then((data: IClientsUr[]) => {
        this.equipmentsList = data;
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
    };

    this.getEquipments();
  }

  equipmentDetails(index) {
    this.router.navigate(['/equipments/' + index]);
  }

  mouseEnter(data) {
    console.log(data);

    this.tooltip = {
      data: {status: data.status},
      show: true
    };
  }

  mouseLeave() {
    this.tooltip = {
      data: {},
      show: false
    };
  }
}


