import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HireService} from '../hire/hire.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {GlobalPayList} from '../pay_list/global-pay-list';
import {GlobalParamsPay} from '../pay/global-params-pay';
import {GlobalParamsRental} from '../rental/global-params-rental';
import {ApplicationsCreateService} from '../applications-create/applicationsCreate.service';
import {DopParamsService} from '../../services/dopParams.service';
import {ApplicationsService} from '../applications/applications.service';
import {GlobalExtensionsList} from '../extensions_list/global-extensions-list';
import {GlobalParamsUser} from '../../storage/global-params-user';
import * as moment from 'moment';
import {GlobalParamsTame} from '../tame/global-params-tame';
import {DocumentService} from '../../services/document.service';
import {EquipmentsService} from '../equipments/equipments.service';

@Component({
  selector: 'app-hire-info',
  templateUrl: './hireInfo.component.html',
})
export class HireInfoComponent {
  // идентификатор заявки
  hireId: null;
  showCloseHireButton = false;
  discounts: InterFaceDopParams[] = [];
  delivery: InterFaceDopParams[] = [];
  showButtonCloseHire = false;
  applicationsTypeLeases: InterFaceDopParams[] = [];

  showReturnEq = false;
  // окно доставки
  showDelivery = false;
  img = '';

  // список прокатов
  hireInfo: InterFaceHireInfo = {
    id: null,
    branch: '',
    delivery: null,
    typeLease_id: null,
    sale: null,
    source: null,
    comment: '',
    rent_start: '',
    rent_end: '',
    client_fio: '',
    client_phone: '',
    sum: '',
    total_paid: '',
    remainder: '',
    count: null,
    hire_state_id: null,
    hire_state: '',
    equipments: {
      equipments_id: '',
      name: '',
      state: '',
      photo: null,
      state_id: null,
      photo_alias: '',
    },
    pay_list: [{
      'date': null,
      'user_id': null,
      'sum': '',
      'cash_box': ''
    }],
    extensions: [{
      'date': null,
      'user_id': '',
      'count': null
    }],
    lesa: '',
    rama_prokhodnaya: null,
    rama_letsnitsey: null,
    diagonalnaya_svyaz: null,
    gorizontalnaya_svyaz: null,
    rigel: null,
    nastil: null,
    month_sum: '',
    square: '',
    address: '',
    delivery_data: {delivery_sum: '', delivery_sum_paid: '', delivery_app: [{name: '', id: null}]}
  };

  constructor(public hireService: HireService,
              private router: ActivatedRoute,
              private globalParamsMessage: GlobalParamsMessage,
              public globalPayList: GlobalPayList,
              private globalParamsPay: GlobalParamsPay,
              private globalParamsRental: GlobalParamsRental,
              private globalParamsTame: GlobalParamsTame,
              private applicationsService: ApplicationsService,
              private applicationsCreateService: ApplicationsCreateService,
              private dopParamsService: DopParamsService,
              private routerCurrent: Router,
              private documentService: DocumentService,
              public globalParamsUser: GlobalParamsUser,
              public equipmentsService: EquipmentsService,
              private globalExtensionsList: GlobalExtensionsList) {

    this.router.params.subscribe(
      (params: Params): void => {
        this.hireId = params.id;
      }
    );

    this.applicationsService.refreshInfo.subscribe(() => {
      this.getHireInfo();
    });

    this.applicationsCreateService.getApplicationsDelivery().then((data: InterFaceDopParams[]) => {
        this.delivery = data;
      },
      (error) => {
        console.log('Ошибка при получении статусов доставки: ', error);
      });

    this.dopParamsService.getDiscount().then((data: InterFaceDopParams[]) => {
        this.discounts = data;
      },
      (error) => {
        console.log('Ошибка при получении списка скидок: ', error);
      });

    this.applicationsCreateService.getApplicationsTypeLease().then((data: InterFaceDopParams[]) => {
        this.applicationsTypeLeases = data;
      },
      (error) => {
        console.log('Ошибка при получении типов аренды: ', error);
      });
    this.getHireInfo();
  }

  getHireInfo() {
    this.hireService.getHireInfo({id: this.hireId}).then((data: InterFaceHireInfo) => {
        this.showReturnEq = false;
        this.hireInfo = data;
        this.hireInfo.rent_start = moment(this.hireInfo.rent_start).format().slice(0, 16);
        this.hireInfo.rent_end = moment(this.hireInfo.rent_end).format().slice(0, 16);
        this.globalPayList.data.pay_list = this.hireInfo.pay_list;
        this.globalExtensionsList.data.extension_list = this.hireInfo.extensions;

        // показ кнопки закрыть прокат
        if (this.globalParamsUser.type === 1) {
          this.showCloseHireButton = true;
        } else {
          this.showCloseHireButton = this.hireInfo.equipments.state_id === 4;
        }

        // показ закрыть прокат только когда админ или менеджер, но оборудование на складе и нет долгов
        if (this.globalParamsUser.type === 1 || (this.globalParamsUser.type === 2 && this.hireInfo.equipments.state_id === 4
            && +this.hireInfo.remainder > 0)) {
          this.showButtonCloseHire = true;
        }

        // возврат оборудования только когда он еще в прокате и прокат находится в стадии "прокат" или "бронь"
        if (this.hireInfo.equipments.state_id !== 4 && (this.hireInfo.hire_state_id === 1 || this.hireInfo.hire_state_id === 4 || this.hireInfo.hire_state_id === 2)) {
          this.showReturnEq = true;
        }

        if (this.hireInfo.equipments.state_id === 4) {
          this.img = 'ok';
        }
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });
  }

  updateHire() {
    const date1 = new Date(this.hireInfo.rent_start);
    const date2 = new Date(this.hireInfo.rent_end);

    if (date2 < date1) {
      this.globalParamsMessage.data = {title: `Период аренды указан некорректно`, type: 'error', body: ''};
      return false;
    }

    this.hireService.updateHire({
      id: this.hireInfo.id,
      delivery: this.hireInfo.delivery,
      sale: this.hireInfo.sale,
      typeLease_id: this.hireInfo.typeLease_id,
      rent_start: this.hireInfo.rent_start,
      rent_end: this.hireInfo.rent_end,
      comment: this.hireInfo.comment
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Заявка успешно обновлена', type: 'success', body: ''};
        this.getHireInfo();
      },
      (error) => {
        console.log('Ошибка при обновлении заявки: ', error);
      });
  }

  equipmentReturn() {
    this.hireService.equipmentReturn({
      id: this.hireInfo.id
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Товар успешно отправлен на склад', type: 'success', body: ''};
        this.getHireInfo();
      },
      (error) => {
        console.log('Ошибка при обновлении заявки: ', error);
      });
  }

  showInsertSum() {
    this.globalParamsPay.data = {show: true, sum: '', app_id: this.hireInfo.id, cashBox: null};
  }

  // продление проката
  showInsertRental() {
    this.globalParamsRental.data = {
      show: true,
      date_end: this.hireInfo.rent_end,
      type_lease: this.hireInfo.typeLease_id,
      app_id: this.hireInfo.id
    };
  }

  // сокращение проката
  showTameRental() {
    this.globalParamsTame.data = {
      show: true,
      date_end: this.hireInfo.rent_end,
      type_lease: this.hireInfo.typeLease_id,
      app_id: this.hireInfo.id
    };
  }

  open_pay_list() {
    this.globalPayList.data.show = true;
  }

  open_extensions_list() {
    this.globalExtensionsList.data.show = true;
  }

  // удалить прока
  delete_hire() {
    this.hireService.deleteHire({
      id: this.hireInfo.id
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Прокат успешно удален', type: 'success', body: ''};

        if (this.hireInfo.lesa === '1') {
          this.routerCurrent.navigate(['/hire-lesa']);
        } else {
          this.routerCurrent.navigate(['/hire']);
        }

      },
      (error) => {
        console.log('Ошибка при удалении проката: ', error);
      });
  }

  // закрыть прокат
  close_hire() {
    this.hireService.closeHire({
      id: this.hireInfo.id
    }).then(() => {

        this.getHireInfo();
      },
      (error) => {
        console.log('Ошибка при закрытии проката: ', error);
      });
  }
}
