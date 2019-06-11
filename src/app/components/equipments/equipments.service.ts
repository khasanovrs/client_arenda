import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class EquipmentsService {
  equipmentsTypeList: InterFaceDopParams[] = [];
  equipmentsCategoryList: InterFaceDopParams[] = [];
  equipmentsAvailabilityList: InterFaceDopParams[] = [];
  equipmentsFieldsList: InterFaceActiveFields[] = [];

  constructor(private httpService: HttpService) {
  }


  // получение списка типов товаров
  public getEquipmentsType() {
    return new Promise((resolve, reject) => {
      if (this.equipmentsTypeList.length === 0) {
        this.httpService.prepareQuery('api/get-equipments-type', '')
          .then((result: InterFaceStocks[]) => {
              this.equipmentsTypeList = result;
              resolve(this.equipmentsTypeList);
            },
            (error) => {
              console.log('Ошибка при получении списка типов оборудования', error);
              reject();
            }
          );
      } else {
        resolve(this.equipmentsTypeList);
      }
    });
  }

  // получение списка категорий товаров
  public getEquipmentsCategory() {
    return new Promise((resolve, reject) => {
      if (this.equipmentsCategoryList.length === 0) {
        this.httpService.prepareQuery('api/get-equipments-category', '')
          .then((result: InterFaceStocks[]) => {
              this.equipmentsCategoryList = result;
              resolve(this.equipmentsCategoryList);
            },
            (error) => {
              console.log('Ошибка при получении списка категорий оборудования', error);
              reject();
            }
          );
      } else {
        resolve(this.equipmentsCategoryList);
      }
    });
  }

  // получение списка статусов
  public getEquipmentsStatus() {
    return new Promise((resolve, reject) => {
      if (this.equipmentsAvailabilityList.length === 0) {
        this.httpService.prepareQuery('api/get-equipments-status', '')
          .then((result: InterFaceStocks[]) => {
              this.equipmentsAvailabilityList = result;
              resolve(this.equipmentsAvailabilityList);
            },
            (error) => {
              console.log('Ошибка при получении списка категорий оборудования', error);
              reject();
            }
          );
      } else {
        resolve(this.equipmentsAvailabilityList);
      }
    });
  }

  // получение списка товаров
  public getEquipments(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-equipments', data)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка оборудований', error);
            reject();
          }
        );
    });
  }

  // получение списка активных полей
  public getEquipmentsFields() {
    return new Promise((resolve, reject) => {
      if (this.equipmentsFieldsList.length === 0) {
        this.httpService.prepareQuery('api/get-equipments-fields', '')
          .then((result: InterFaceActiveFields[]) => {
              this.equipmentsFieldsList = result;
              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении списка полей для оборудования', error);
              reject();
            }
          );
      } else {
        resolve(this.equipmentsFieldsList);
      }
    });
  }

  // изменение списка активных полей для таблицы
  public changeFields(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/change-equipments-fields', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при изменение списка отображаемых полей', error);
            reject();
          }
        );
    });
  }

  // обновление статуса клиента
  public updateStatus(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-equipments-update-status', data)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при изменении статуса у оборудования', error);
            reject(error);
          }
        );
    });
  }

  // получение списка марок
  public getEquipmentsMark() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-equipment-mark', '')
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка марок', error);
            reject(error);
          }
        );
    });
  }
}
