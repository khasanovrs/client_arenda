import {Component, OnInit} from '@angular/core';
import {DopParamsService} from '../../services/dopParams.service';
import {StockService} from './stock.service';
import {EquipmentsService} from '../equipments/equipments.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
})
export class StockComponent implements OnInit {
  branches: InterFaceDopParams[] = [];
  stocks: InterFaceStocks[] = [];
  equipmentsTypeList: InterFaceDopParams[] = [];
  equipmentsCategoryList: InterFaceDopParams[] = [];
  equipmentsAvailabilityList: InterFaceDopParams[] = [];
  equipmentsFieldsList: InterFaceActiveFields[] = [];

  // отображение фильтра
  showFilters = false;
  // отображение фильтра
  showActiveFields = false;

  equipmentsList: any = [];
  filters: InterFaceFilterEquipments = {
    type: 'all',
    branch: null,
    stock: null,
    equipmentsType: null,
    equipmentsCategory: null,
    equipmentsAvailability: null,
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

  constructor(private stockService: StockService,
              private dopParamsService: DopParamsService,
              private equipmentsService: EquipmentsService) {
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

    this.equipmentsService.getEquipmentsAvailability().then((data: InterFaceDopParams[]) => {
        this.equipmentsAvailabilityList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка категорий оборудования: ', error);
      });

    this.equipmentsService.getEquipmentsFields().then((data: InterFaceActiveFields[]) => {
        this.equipmentsFieldsList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка полей оборудования: ', error);
      });
  }

  // список оборудования
  changeTypeEquipments(data) {
    this.filters.type = data;
  }

  // отображение фильтра
  changeShowFilters() {
    this.showFilters = !this.showFilters;
  }

  // отображение фильтра
  changeActiveFields() {
    this.showActiveFields = !this.showActiveFields;
  }

  // получение списка оборудования
  getEquipments() {
    this.equipmentsService.getEquipments({
      type: 'all',
      branch: null,
      stock: null,
      equipmentsType: null,
      equipmentsCategory: null,
      equipmentsAvailability: null,
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
      degree_wear_end: this.filters.degree_wear_end,
    }).then((data: IClientsUr[]) => {
        this.equipmentsList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка юр. клиентов: ', error);
      });
  }

  // очистка фильтра
  clearFilter() {
    this.filters = {
      type: 'all',
      like: '',
      source: null,
      status: null,
      branch: null,
      date_start: '',
      date_end: '',
      rentals_start: '',
      rentals_end: '',
      dohod_start: '',
      dohod_end: '',
    };

    this.getEquipments();
  }
}
