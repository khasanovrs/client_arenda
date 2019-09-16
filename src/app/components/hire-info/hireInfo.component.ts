import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HireService} from '../hire/hire.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {GlobalPayList} from '../pay_list/global-pay-list';
import {GlobalParamsPay} from '../pay/global-params-pay';
import {GlobalParamsRental} from '../rental/global-params-rental';
import {ApplicationsCreateService} from '../applications-create/applicationsCreate.service';
import {DopParamsService} from '../../services/dopParams.service';
import {ApplicationsService} from '../applications/applications.service';

@Component({
  selector: 'app-hire-info',
  templateUrl: './hireInfo.component.html',
})
export class HireInfoComponent {
  // идентификатор заявки
  hireId: null;
  discounts: InterFaceDopParams[] = [];
  delivery: InterFaceDopParams[] = [];

  showModalClose = false;
  checkPrim = false;

  // список прокатов
  hireInfo: InterFaceHireInfo = {
    id: null,
    app_id: null,
    branch: '',
    delivery: null,
    typeLease: '',
    typeLease_id: null,
    sale: null,
    source: null,
    comment: '',
    rent_start: '',
    rent_end: '',
    client_fio: '',
    client_phone: '',
    delivery_sum: '',
    sum: '',
    sum_sale: '',
    total_paid: '',
    remainder: '',
    count: null,
    equipments: {
      equipments_id: '',
      name: '',
      state: '',
      photo: null,
      photo_alias: '',
    },
    pay_list: [{
      'date': null,
      'user_id': null,
      'sum': ''
    }]
  };

  constructor(public hireService: HireService,
              private router: ActivatedRoute,
              private globalParamsMessage: GlobalParamsMessage,
              public globalPayList: GlobalPayList,
              private globalParamsPay: GlobalParamsPay,
              private globalParamsRental: GlobalParamsRental,
              private applicationsService: ApplicationsService,
              private applicationsCreateService: ApplicationsCreateService,
              private dopParamsService: DopParamsService) {

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

    this.getHireInfo();
  }

  getHireInfo() {
    this.hireService.getHireInfo({id: this.hireId}).then((data: InterFaceHireInfo) => {
        this.hireInfo = data;
        this.hireInfo.rent_start = new Date(this.hireInfo.rent_start).toISOString().slice(0, 16);
        this.hireInfo.rent_end = new Date(this.hireInfo.rent_end).toISOString().slice(0, 16);
        this.globalPayList.data.pay_list = this.hireInfo.pay_list;
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
      rent_start: this.hireInfo.rent_start,
      rent_end: this.hireInfo.rent_end,
      comment: this.hireInfo.comment
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Заявка успешно обновлена', type: 'success', body: ''};
      },
      (error) => {
        console.log('Ошибка при обновлении заявки: ', error);
      });
  }

  closeHire() {
    this.showModalClose = false;
    this.hireService.closeHire({
      id: this.hireInfo.id,
      checkPrim: this.checkPrim
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Товар успешно отправлен на склад', type: 'success', body: ''};
      },
      (error) => {
        console.log('Ошибка при обновлении заявки: ', error);
      });
  }

  showInsertSum() {
    this.globalParamsPay.data = {show: true, sum: '', eq_id: this.hireInfo.id, cashBox: null};
  }

  showInsertRental() {
    this.globalParamsRental.data = {
      show: true,
      date_end: this.hireInfo.rent_end,
      type_lease: this.hireInfo.typeLease_id,
      app_eq_id: this.hireInfo.id,
      app_id: this.hireInfo.app_id
    };
  }

  open_pay_list() {
    this.globalPayList.data.show = true;
  }
}
