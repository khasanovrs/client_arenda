import {Component, OnInit} from '@angular/core';
import {DopParamsService} from '../../services/dopParams.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {EquipmentsService} from './equipments.service';
import {FinanceService} from '../finance/finance.service';
import {GlobalParamsUser} from '../../storage/global-params-user';
import {EquipmentsCreateService} from '../equipments_create/equipmentsCreate.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipments.component.html',
})
export class EquipmentsComponent implements OnInit {
  stocks: InterFaceStocks[] = [];
  equipmentsTypeList: InterFaceDopParams[] = [];
  equipmentsCategoryList: InterEquipmentsCategory[] = [];
  equipmentsStatusList: InterFaceDopParams[] = [];
  showEquipmentsStatusList: InterFaceDopParams[] = [];
  discounts: InterFaceDopParams[] = [];
  equipmentsMarkList: InterFaceDopParams[] = [];
  equipmentId: null;

  // причина изменения склада
  reason_change_stock = '';
  // причина изменения статуса
  reason_change_status = '';
  // сумма ремонта
  amount_repair = 0;
  // сумма продажи
  sale_amount = '';
  // касса
  cash_box = null;

  show_cash_box = false;
  show_sale_amount = false;
  show_amount_repair = false;
  show_reason_change_status = false;

  // кассы
  financeCashBox: InterFaceFinanceCashBox[];

  equipment: InterFaceInfoEquipments = {
    id: null,
    model: '',
    old_status: null,
    new_status: null,
    old_stock: null,
    new_stock: null,
    discount: null,
    type: null,
    category: null,
    tool_number: null,
    mark: null,
    selling: '',
    selling_price: '',
    price_per_day: '',
    photo: '',
    photo_alias: '',
    rentals: 0,
    repairs: 0,
    repairs_sum: '0',
    revenue: '0',
    profit: '0',
    degree_wear: 0,
    payback_ratio: 0,
    power_energy: '',
    length: '',
    network_cord: '',
    power: '',
    frequency_hits: '',
    comment: '',
    confirmed: '',
    count: '',
    count_hire: '',
    count_repairs: '',
    count_left: '',
    change_history: [{
      date: '',
      new_params: '',
      old_params: '',
      type: '',
      reason: '',
      user: '',
    }],
    change_history_status: [{
      date: '',
      new_params: '',
      old_params: '',
      cashBox: '',
      sum: '',
      reason: '',
      user: '',
    }]
  };

  constructor(private dopParamsService: DopParamsService,
              private equipmentsService: EquipmentsService,
              private equipmentsCreateService: EquipmentsCreateService,
              private globalParamsMessage: GlobalParamsMessage,
              private activatedRoute: ActivatedRoute,
              private financeService: FinanceService,
              public globalParamsUser: GlobalParamsUser,
              private router: Router) {
    this.activatedRoute.params.subscribe(
      (params: Params): void => {
        this.equipmentId = params.id;
      }
    );
  }

  ngOnInit() {
    this.dopParamsService.getStock().then((data: InterFaceStocks[]) => {
        this.stocks = data;
      },
      (error) => {
        console.log('Ошибка при получении складов: ', error);
      });

    this.equipmentsService.getEquipmentsCategory().then((data: InterEquipmentsCategory[]) => {
        this.equipmentsCategoryList = data;
        this.changeTypeList();
      },
      (error) => {
        console.log('Ошибка при получении списка категорий оборудования: ', error);
      });

    this.equipmentsService.getEquipmentsStatus().then((data: InterFaceDopParams[]) => {
        this.equipmentsStatusList = data;
        this.changeStatus();
      },
      (error) => {
        console.log('Ошибка при получении списка статусов оборудования: ', error);
      });

    this.equipmentsService.getEquipmentsMark().then((data: InterFaceDopParams[]) => {
        this.equipmentsMarkList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка статусов оборудования: ', error);
      });

    this.dopParamsService.getDiscount().then((data: InterFaceDopParams[]) => {
        this.discounts = data;
      },
      (error) => {
        console.log('Ошибка при получении списка скидок: ', error);
      });

    this.equipmentsService.getEquipmentInfo({equipmentId: this.equipmentId}).then((data: InterFaceInfoEquipments) => {
        this.equipment = data;
        if (this.equipment.new_status === 2) {
          this.showEquipmentsStatusList = this.equipmentsStatusList.filter(item => item.val === 4 || item.val === 2);
        }
        this.changeTypeList();
        this.changeStatus();
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по клиенту: ', error);
      });

    this.financeService.getFinanceCashBOx().then((data: InterFaceFinanceCashBox[]) => {
        this.financeCashBox = data;
      },
      (error) => {
        console.log('Ошибка при получении касс: ', error);
      });
  }

  changeTypeList() {
    const arr = this.equipmentsCategoryList.filter(item => item.val === this.equipment.category);
    this.equipmentsTypeList = arr.length !== 0 ? arr[0].type : [];
  }

  changeStatus() {
    if (this.equipment.new_status === 3) {
      this.showEquipmentsStatusList = this.equipmentsStatusList.filter(item => item.val === 3);
    } else if (this.equipment.new_status === 2) {
      this.showEquipmentsStatusList = this.equipmentsStatusList.filter(item => item.val === 2 || item.val === 4);
    } else if (this.equipment.new_status === 4) {
      this.showEquipmentsStatusList = this.equipmentsStatusList.filter(item => item.val !== 1 && item.val !== 5);
    } else if (this.equipment.new_status === 6) {
      this.showEquipmentsStatusList = this.equipmentsStatusList.filter(item => item.val === 6);
    } else if (this.equipment.new_status === 1) {
      this.showEquipmentsStatusList = this.equipmentsStatusList.filter(item => item.val === 1);
    } else if (this.equipment.new_status === 5) {
      this.showEquipmentsStatusList = this.equipmentsStatusList.filter(item => item.val === 5);
    } else {
      this.showEquipmentsStatusList = this.equipmentsStatusList;
    }
  }

  updateEquipmentConfirmed() {
    this.equipment.confirmed = '1';
    this.updateEquipment();
  }


  updateEquipment() {
    if (this.equipment.model === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать наименование', type: 'error', body: ''};
      return false;
    }

    if (this.equipment.new_status === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать статус', type: 'error', body: ''};
      return false;
    }

    if (this.equipment.mark === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать марку', type: 'error', body: ''};
      return false;
    }

    if (this.equipment.new_stock === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать склад', type: 'error', body: ''};
      return false;
    }

    if (this.equipment.type === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать тип оборудования', type: 'error', body: ''};
      return false;
    }

    if (this.equipment.category === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать категорию оборудования', type: 'error', body: ''};
      return false;
    }

    if (this.reason_change_stock === '' && this.equipment.new_stock !== this.equipment.old_stock) {
      this.globalParamsMessage.data = {title: 'Необходимо указать причину изменения склада', type: 'error', body: ''};
      return false;
    }

    if (this.equipment.new_status !== this.equipment.old_status) {
      if (this.equipment.new_status === 4 && this.equipment.old_status === 2) {
        if (this.amount_repair === null) {
          this.globalParamsMessage.data = {title: 'Необходимо указать сумму ремонта', type: 'error', body: ''};
          return false;
        }

        if (this.cash_box === null) {
          this.globalParamsMessage.data = {title: 'Необходимо указать кассу', type: 'error', body: ''};
          return false;
        }
      }

      if (this.equipment.new_status !== 6) {
        if (this.reason_change_status === '') {
          this.globalParamsMessage.data = {title: 'Необходимо указать причину изменения статуса', type: 'error', body: ''};
          return false;
        }
      } else {
        if (this.sale_amount === '') {
          this.globalParamsMessage.data = {title: 'Необходимо указать сумму продажи', type: 'error', body: ''};
          return false;
        }

        if (this.cash_box === null) {
          this.globalParamsMessage.data = {title: 'Необходимо указать кассу', type: 'error', body: ''};
          return false;
        }
      }
    }

    this.equipmentsService.updateEquipment({
      id: this.equipment.id,
      model: this.equipment.model,
      new_stock: this.equipment.new_stock,
      old_stock: this.equipment.old_stock,
      reason_change_stock: this.reason_change_stock,
      discount: this.equipment.discount,
      equipmentsType: this.equipment.type,
      equipmentsCategory: this.equipment.category,
      tool_number: this.equipment.tool_number,
      mark: this.equipment.mark,
      selling_price: this.equipment.selling_price,
      price_per_day: this.equipment.price_per_day,
      rentals: this.equipment.rentals,
      repairs: this.equipment.repairs,
      repairs_sum: this.equipment.repairs_sum,
      revenue: this.equipment.revenue,
      profit: this.equipment.profit,
      degree_wear: this.equipment.degree_wear,
      payback_ratio: this.equipment.payback_ratio,
      power_energy: this.equipment.power_energy,
      length: this.equipment.length,
      network_cord: this.equipment.network_cord,
      power: this.equipment.power,
      frequency_hits: this.equipment.frequency_hits,
      photo_alias: this.equipment.photo_alias,
      comment: this.equipment.comment,
      new_status: this.equipment.new_status,
      old_status: this.equipment.old_status,
      reason_change_status: this.reason_change_status,
      amount_repair: this.amount_repair,
      cash_box: this.cash_box,
      sale_amount: this.sale_amount,
      confirmed: this.equipment.confirmed
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Оборудование успешно изменено', type: 'success', body: ''};
        this.router.navigate(['/stock']);
      },
      (error) => {
        console.log('Ошибка при изменении оборудования: ', error);
      });
  }

  checkShowField() {
    if (this.equipment.old_status !== this.equipment.new_status) {
      if (this.equipment.new_status !== 6) {
        this.show_reason_change_status = true;

        if (this.equipment.new_status === 4 && this.equipment.old_status === 2) {
          this.show_amount_repair = true;
          this.show_cash_box = true;
        }
      } else {
        this.show_sale_amount = true;
        this.show_cash_box = true;
      }
    }
  }

  delete_eq() {
    this.equipmentsService.deleteEquipment({
      id: this.equipment.id
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Оборудование успешно удалено', type: 'success', body: ''};
        this.router.navigate(['/stock']);
      },
      (error) => {
        console.log('Ошибка при удалении оборудования: ', error);
      });
  }

  // копирование оборудования
  copy_eq() {
    this.equipmentsCreateService.copyEq = {
      model: this.equipment.model,
      status: this.equipment.new_status,
      stock: this.equipment.new_stock,
      discount: this.equipment.discount,
      type: this.equipment.type,
      category: this.equipment.category,
      tool_number: this.equipment.tool_number,
      mark: this.equipment.mark,
      selling: this.equipment.selling,
      selling_price: this.equipment.selling_price,
      price_per_day: this.equipment.price_per_day,
      rentals: this.equipment.rentals,
      repairs: this.equipment.repairs,
      repairs_sum: this.equipment.repairs_sum,
      revenue: this.equipment.revenue,
      profit: this.equipment.profit,
      degree_wear: this.equipment.degree_wear,
      payback_ratio: this.equipment.payback_ratio,
      power_energy: this.equipment.power_energy,
      length: this.equipment.length,
      network_cord: this.equipment.network_cord,
      power: this.equipment.power,
      frequency_hits: this.equipment.frequency_hits,
      photo_name: this.equipment.photo,
      photo_content: this.equipment.photo,
      photo_alias: this.equipment.photo_alias,
      comment: this.equipment.comment,
      count: 1
    };
    this.router.navigate(['/equipments-create']);
  }
}
