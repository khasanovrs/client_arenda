import {Component, OnInit} from '@angular/core';
import {EquipmentsCreateService} from './equipmentsCreate.service';
import {DopParamsService} from '../../services/dopParams.service';
import {EquipmentsService} from '../equipments/equipments.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {Router} from '@angular/router';

@Component({
  selector: 'app-equipment-create',
  templateUrl: './equipmentsCreate.component.html',
})
export class EquipmentsCreateComponent implements OnInit {
  stocks: InterFaceStocks[] = [];
  equipmentsTypeList: InterFaceDopParams[] = [];
  equipmentsCategoryList: InterEquipmentsCategory[] = [];
  discounts: InterFaceDopParams[] = [];
  equipmentsMarkList: InterFaceDopParams[] = [];
  equipmentsStatusList: InterFaceDopParams[] = [];

  // загрузка изображения
  load_file: any = [];
  fileString = '';

  newEquipments: InterFacenewEquipments = {
    model: '',
    status: null,
    stock: null,
    discount: null,
    type: null,
    category: null,
    tool_number: null,
    mark: null,
    selling_price: '',
    price_per_day: '',
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
    photo_name: '',
    photo_content: '',
    photo_alias: '',
    comment: ''
  };

  constructor(private equipmentsCreateService: EquipmentsCreateService,
              private dopParamsService: DopParamsService,
              private equipmentsService: EquipmentsService,
              private globalParamsMessage: GlobalParamsMessage,
              private router: Router) {
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
      },
      (error) => {
        console.log('Ошибка при получении списка категорий оборудования: ', error);
      });

    this.equipmentsService.getEquipmentsMark().then((data: InterFaceDopParams[]) => {
        this.equipmentsMarkList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка статусов оборудования: ', error);
      });

    this.dopParamsService.getDiscount().then((data: InterFaceDopParams[]) => {
        this.discounts = data;
        this.newEquipments.discount = this.discounts[0].val;
      },
      (error) => {
        console.log('Ошибка при получении списка скидок: ', error);
      });

    this.equipmentsService.getEquipmentsStatus().then((data: InterFaceDopParams[]) => {
        this.equipmentsStatusList = data.filter(item => item.val === 4);
        this.newEquipments.status = this.equipmentsStatusList[0].val;
      },
      (error) => {
        console.log('Ошибка при получении списка статусов оборудования: ', error);
      });
  }

  addEquipment() {
    if (this.newEquipments.model === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать наименование', type: 'error', body: ''};
      return false;
    }

    if (this.newEquipments.status === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать статус', type: 'error', body: ''};
      return false;
    }

    if (this.newEquipments.mark === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать марку', type: 'error', body: ''};
      return false;
    }

    if (this.newEquipments.stock === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать склад', type: 'error', body: ''};
      return false;
    }

    if (this.newEquipments.type === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать тип оборудования', type: 'error', body: ''};
      return false;
    }

    if (this.newEquipments.category === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать категорию оборудования', type: 'error', body: ''};
      return false;
    }

    this.equipmentsCreateService.addEquipment({
      model: this.newEquipments.model,
      status: this.newEquipments.status,
      stock: this.newEquipments.stock,
      discount: this.newEquipments.discount,
      equipmentsType: this.newEquipments.type,
      equipmentsCategory: this.newEquipments.category,
      tool_number: this.newEquipments.tool_number,
      mark: this.newEquipments.mark,
      selling_price: this.newEquipments.selling_price,
      price_per_day: this.newEquipments.price_per_day,
      rentals: this.newEquipments.rentals,
      repairs: this.newEquipments.repairs,
      repairs_sum: this.newEquipments.repairs_sum,
      revenue: this.newEquipments.revenue,
      profit: this.newEquipments.profit,
      degree_wear: this.newEquipments.degree_wear,
      payback_ratio: this.newEquipments.payback_ratio,
      power_energy: this.newEquipments.power_energy,
      length: this.newEquipments.length,
      network_cord: this.newEquipments.network_cord,
      power: this.newEquipments.power,
      frequency_hits: this.newEquipments.frequency_hits,
      photo: this.newEquipments.photo_name,
      photo_alias: this.newEquipments.photo_alias,
      comment: this.newEquipments.comment,
    }).then(() => {

        if (this.newEquipments.photo_name !== '') {
          this.sendFiles();
        } else {
          this.globalParamsMessage.data = {title: 'Оборудование успешно добавлено', type: 'success', body: ''};
          this.router.navigate(['/stock']);
        }
      },
      (error) => {
        console.log('Ошибка при добавлении нового пользователей: ', error);
      });
  }

  // добавить фото
  addPhoto(event) {
    const target = event.target || event.srcElement;

    for (let j = 0; target.files.length > j; j++) {
      this.load_file = target.files[j];
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this, name);
      reader.readAsBinaryString(this.load_file);
    }
  }

  _handleReaderLoaded(data, readerEvt) {
    const binaryString = readerEvt.target.result;
    this.fileString = btoa(binaryString);

    this.newEquipments.photo_name = this.load_file.name;
    this.newEquipments.photo_content = this.fileString;
  }

  sendFiles() {
    this.equipmentsCreateService.sendOrderFiles({
      file_name: this.newEquipments.photo_name,
      files: this.newEquipments.photo_content
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Оборудование успешно добавлено', type: 'success', body: ''};
        this.router.navigate(['/stock']);
      },
      (error) => {
        console.log('Ошибка при добавлении фотографии оборудования: ', error);
      });
  }

  changeCategory(data) {
    const arr = this.equipmentsCategoryList.filter(item => item.val === data);
    this.equipmentsTypeList = arr[0].type;
  }
}
