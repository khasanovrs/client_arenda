import {Component, OnInit} from '@angular/core';
import {ApplicationsCreateService} from './applicationsCreate.service';
import {DopParamsService} from '../../services/dopParams.service';
import {EquipmentsService} from '../equipments/equipments.service';
import {ClientService} from '../client/client.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {Router} from '@angular/router';
import {GlobalParams} from '../../storage/global-params';
import {ApplicationsService} from '../applications/applications.service';
import {GlobalParamsPay} from '../pay/global-params-pay';

@Component({
  selector: 'app-applications-create',
  templateUrl: './applicationsCreate.component.html',
})
export class ApplicationsCreateComponent implements OnInit {
  applicationsStatus: InterFaceDopParams[] = [];
  applicationsSource: InterFaceDopParams[] = [];
  applicationsDelivery: InterFaceDopParams[] = [];
  applicationsTypeLeases: InterFaceDopParams[] = [];
  equipmentsTypeList: InterFaceDopParams[] = [];
  branches: InterFaceDopParams[] = [];
  // список скидок
  discounts: InterFaceDopParams[] = [];
  // отображение окна поиска клиента из бд
  showSearchClient = {
    show: false,
    filter: '',
    clients: []
  };

  // отображение окна добавления товара
  showAddEquipments = {
    show: false,
    filter: '',
    equipments: []
  };

  allSum = 0;

  application: InterFaceNewApplication = {
    client_id: null,
    equipments: [],
    sum: '0',
    delivery_sum: '0',
    typeLease: {val: null, required: true, name: 'тип аренды'},
    sale: {val: 0, required: true, name: 'скидка'},
    status: {val: null, required: true, name: 'статус'},
    source: {val: null, required: true, name: 'источник'},
    branch: {val: 0, required: true, name: 'филиал'},
    rent_start: {val: '', required: true, name: 'начало аренды'},
    rent_end: {val: '', required: true, name: 'конец аренды'},
    delivery: {val: null, required: true, name: 'тип доставки'},
    client_fio: {val: '', required: true, name: 'фио клиента'},
    client_email: {val: '', required: false, name: ''},
    comment: '',
    client_phone: {val: '', required: true, name: 'телефон клиента'},
    client_number_passport: {val: '', required: true, name: 'серия и номер паспорта'},
    client_where_passport: {val: '', required: true, name: 'кем выдан паспорт'},
    client_date_passport: {val: '', required: true, name: 'дата выдачи паспорта'},
    client_address_passport: {val: '', required: true, name: 'адрес регистрации'},
    client_type: null
  };

  buttonText = '';

  constructor(private applicationsCreateService: ApplicationsCreateService,
              private applicationsService: ApplicationsService,
              private dopParamsService: DopParamsService,
              private equipmentsService: EquipmentsService,
              private clientService: ClientService,
              private globalParamsMessage: GlobalParamsMessage,
              public globalParams: GlobalParams,
              private router: Router,
              public globalParamsPay: GlobalParamsPay) {
  }

  ngOnInit() {
    this.applicationsService.getApplicationsStatus().then((data: InterFaceDopParams[]) => {
        this.applicationsStatus = data;
        this.changeStatusApplications(this.applicationsStatus[0].val);
      },
      (error) => {
        console.log('Ошибка при получении статусов: ', error);
      });

    this.applicationsCreateService.getApplicationsSource().then((data: InterFaceDopParams[]) => {
        this.applicationsSource = data;
      },
      (error) => {
        console.log('Ошибка при получении источников: ', error);
      });

    this.applicationsCreateService.getApplicationsDelivery().then((data: InterFaceDopParams[]) => {
        this.applicationsDelivery = data;
        this.application.delivery.val = this.applicationsDelivery[1].val;
      },
      (error) => {
        console.log('Ошибка при получении статусов доставки: ', error);
      });

    this.applicationsCreateService.getApplicationsTypeLease().then((data: InterFaceDopParams[]) => {
        this.applicationsTypeLeases = data;
        this.application.typeLease.val = data[0].val;
        this.changeTypeLease();
      },
      (error) => {
        console.log('Ошибка при получении типов аренды: ', error);
      });

    this.equipmentsService.getEquipmentsType().then((data: InterFaceDopParams[]) => {
        this.equipmentsTypeList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка типов оборудования: ', error);
      });

    this.dopParamsService.getDiscount().then((data: InterFaceDopParams[]) => {
        this.discounts = data;
        this.application.sale.val = this.discounts[0].val;
      },
      (error) => {
        console.log('Ошибка при получении списка скидок: ', error);
      });

    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branches = data;
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });

    this.application.rent_start.val = new Date().toISOString().slice(0, 16);
  }

  changeTypeLease() {
    const tomorrow = new Date(this.application.rent_start.val);

    if (this.application.typeLease.val === 1) {
      tomorrow.setDate(tomorrow.getDate() + 1);
      this.application.rent_end.val = tomorrow.toISOString().slice(0, 16);
    } else {
      tomorrow.setDate(tomorrow.getDate() + 30);
      this.application.rent_end.val = tomorrow.toISOString().slice(0, 16);
    }

    this.changeSum();
  }

  changeBranch() {
    this.equipmentsService.allEquipmentsBranch({branch: this.application.branch.val}).then((data: InterFaceSearchClient[]) => {
        this.showAddEquipments.equipments = data;
      },
      (error) => {
        console.log('Ошибка при получении списка оборудования: ', error);
      });

    this.clientService.searchAllClientBranch({branch: this.application.branch.val}).then((data: InterFaceSearchClient[]) => {
        this.showSearchClient.clients = data;
      },
      (error) => {
        console.log('Ошибка при получении списка клиентов: ', error);
      });
  }

  // вычесляем сумму аренды
  changeSum() {
    this.application.delivery_sum = this.application.delivery.val === 1 ? this.application.delivery_sum : '0';
    this.allSum = 0;
    this.allSum += parseFloat(this.application.delivery_sum);
    let sum = null;
    if (this.application.equipments.length !== 0) {
      for (const value of this.application.equipments) {
        sum += value.count * parseFloat(value.price);
      }
    } else {
      return true;
    }

    if (this.application.rent_start.val !== null && this.application.rent_end.val !== null) {
      const date1 = new Date(this.application.rent_start.val);
      const date2 = new Date(this.application.rent_end.val);

      if (date2 < date1) {
        this.globalParamsMessage.data = {title: `Период аренды указан некорректно`, type: 'error', body: ''};
        return false;
      }

      const daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));

      if (isNaN(daysLag)) {
        return true;
      }

      sum = daysLag * sum;
    }

    if (this.application.sale !== null) {
      let tmpSale = 0;
      for (const value of this.discounts) {
        if (this.application.sale.val === value.val) {
          tmpSale = parseFloat(value.name);
        }
      }

      if (tmpSale !== 0) {
        sum -= sum * tmpSale / 100;
      }
    }

    this.application.sum = sum;

    this.allSum += parseFloat(this.application.sum);
  }


  changeStatusApplications(val) {
    this.application.status.val = val;

    if (val === 1) {
      this.buttonText = 'Создание проката';
    }
    if (val === 2) {
      this.buttonText = 'Создание брони';
    }
    if (val === 3) {
      this.buttonText = 'Создание спроса';
    }
    if (val === 4) {
      this.buttonText = 'Создание пролета';
    }
    if (val === 5) {
      this.buttonText = 'Создание "узнали"';
    }
  }

  // поиск клиентов из бд
  searchClient(filter) {
    if (filter === '') {
      return false;
    }

    this.clientService.searchClient({filter: filter}).then((data: InterFaceSearchClient[]) => {
        this.showSearchClient.clients = data;
      },
      (error) => {
        console.log('Ошибка при получении списка сотрудников: ', error);
      });
  }

  // поиск товара из бд
  searchEquipments(filter) {
    if (filter === '') {
      return false;
    }

    this.equipmentsService.searchEquipments({filter: filter}).then((data: InterFaceSearchClient[]) => {
        this.showAddEquipments.equipments = data;
      },
      (error) => {
        console.log('Ошибка при получении списка оборудования: ', error);
      });
  }

  changeCount(equipment, type) {

    if (type === 'increase') {
      if (parseInt(equipment.count, 10) === parseInt(equipment.in_stock, 10)) {
        this.globalParamsMessage.data = {title: `В наличии только ${equipment.in_stock} шт `, type: 'error', body: ''};
        return false;
      }

      equipment.count++;
    }

    if (type === 'decrease') {
      if (equipment.count === 1) {
        this.globalParamsMessage.data = {title: `Количество оборудования не может быть меньше 1`, type: 'error', body: ''};
        return false;
      }
      equipment.count--;
    }

    this.changeSum();
  }

  showInsertSum() {
    this.globalParamsPay.data = {show: true, sum: '', eq_id: null, cashBox: null};
  }

  // заполнение данными из справочника
  insertClientData(index) {
    this.application.client_id = this.showSearchClient.clients[index].client_id;
    this.application.client_fio.val = this.showSearchClient.clients[index].client_fio;
    this.application.client_email.val = this.showSearchClient.clients[index].client_email;
    this.application.client_phone.val = this.showSearchClient.clients[index].client_phone;
    this.application.client_number_passport.val = this.showSearchClient.clients[index].client_number_passport;
    this.application.client_where_passport.val = this.showSearchClient.clients[index].client_where_passport;
    this.application.client_date_passport.val = this.showSearchClient.clients[index].client_date_passport;
    this.application.client_address_passport.val = this.showSearchClient.clients[index].client_address_passport;
    this.application.client_type = this.showSearchClient.clients[index].client_type;

    this.showSearchClient.show = false;

    this.showSearchClient = {
      show: false,
      filter: '',
      clients: []
    };
  }

  insertEquipmentsData(index) {
    const tmp = {
      id: this.showAddEquipments.equipments[index].id,
      name: this.showAddEquipments.equipments[index].name,
      in_stock: this.showAddEquipments.equipments[index].count,
      count: 1,
      price: this.showAddEquipments.equipments[index].price_per_day,
      photo: this.showAddEquipments.equipments[index].photo
    };
    this.application.equipments.push(tmp);

    this.showAddEquipments = {
      show: false,
      filter: '',
      equipments: []
    };

    this.changeSum();
  }

  addApplication() {
    for (const value in this.application) {
      if (value === 'client_id') {
        continue;
      }
      if (this.application.status.val === 2 || this.application.status.val === 1) {
        if (this.application.hasOwnProperty(value) && typeof this.application[value].required === 'undefined') {

          if (this.application[value].required && this.application[value].val === '') {
            this.globalParamsMessage.data = {title: `Необходимо заполнить поле "${this.application[value].name}"`, type: 'error', body: ''};
            return false;
          }
        }
      }
    }

    const date1 = new Date(this.application.rent_start.val);
    const date2 = new Date(this.application.rent_end.val);

    if (date2 < date1) {
      this.globalParamsMessage.data = {title: `Период аренды указан некорректно`, type: 'error', body: ''};
      return false;
    }

    this.applicationsCreateService.addApplication({
      client_id: this.application.client_id,
      equipments: this.application.equipments,
      typeLease: this.application.typeLease.val,
      sale: this.application.sale.val,
      rent_start: this.application.rent_start.val,
      rent_end: this.application.rent_end.val,
      delivery: this.application.delivery.val,
      client_fio: this.application.client_fio.val,
      client_email: this.application.client_email.val,
      client_phone: this.application.client_phone.val,
      client_number_passport: this.application.client_number_passport.val,
      client_where_passport: this.application.client_where_passport.val,
      client_date_passport: this.application.client_date_passport.val,
      client_address_passport: this.application.client_address_passport.val,
      sum_pay: this.globalParamsPay.data.sum,
      cashBox: this.globalParamsPay.data.cashBox,
      sum: this.application.sum,
      delivery_sum: this.application.delivery_sum,
      comment: this.application.comment,
      source: this.application.source.val,
      branch: this.application.branch.val,
      status: this.application.status.val
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Заявка успешно добавлена', type: 'success', body: ''};

        this.router.navigate(['/application']);
      },
      (error) => {
        console.log('Ошибка при добавлении новой заявки: ', error);
      });
  }

  // удаление оборудования из списка
  deleteEquipment(index) {
    this.application.equipments.splice(index, 1);
  }

  // проверка через приставов
  getBailiffs() {
    this.clientService.getBailiffs({
      fio: this.application.client_fio.val,
      region: this.application.branch.val,
      type: this.application.client_type
    }).then((data: any) => {
        if (data.length === 0) {
          this.globalParamsMessage.data = {title: 'У клиента нет долгов', type: 'success', body: ''};
        }

      },
      (error) => {
        console.log('Ошибка при получении данных от приставов: ', error);
      });
  }
}
