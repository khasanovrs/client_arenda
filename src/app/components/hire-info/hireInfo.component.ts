import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HireService} from '../hire/hire.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';

@Component({
  selector: 'app-hire-info',
  templateUrl: './hireInfo.component.html',
})
export class HireInfoComponent {
  statusList: InterFaceDopParams[] = [];
  // идентификатор заявки
  hireId: null;

  // список прокатов
  hireInfo: InterFaceHireInfo = {
    id: null,
    branch: '',
    delivery: '',
    typeLease: '',
    sale: '',
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
      status: null,
      photo: null,
    }
  };

  constructor(public hireService: HireService,
              private router: ActivatedRoute,
              private globalParamsMessage: GlobalParamsMessage) {

    this.router.params.subscribe(
      (params: Params): void => {
        this.hireId = params.id;
      }
    );

    this.hireService.getHireStatus().then((data: InterFaceDopParams[]) => {
        this.statusList = data;
      },
      (error) => {
        console.log('Ошибка при получении статусов: ', error);
      });


    this.hireService.getHireInfo({id: this.hireId}).then((data: InterFaceHireInfo) => {
        this.hireInfo = data;
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });
  }

  updateHire() {
    this.hireService.updateHire({
      id: this.hireInfo.id,
      comment: this.hireInfo.comment,
      status: this.hireInfo.equipments.status,
      total_paid: this.hireInfo.total_paid,
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Заявка успешно обновлена', type: 'success', body: ''};
      },
      (error) => {
        console.log('Ошибка при обновлении заявки: ', error);
      });
  }
}
