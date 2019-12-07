import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';

@Injectable()
export class EquipmentsService {
  equipmentsTypeList: InterFaceDopParams[] = [];
  equipmentsCategoryList: InterFaceDopParams[] = [];
  equipmentsAvailabilityList: InterFaceDopParams[] = [];
  equipmentsMarkList: InterFaceDopParams[] = [];
  equipmentsFieldsList: InterFaceActiveFields[] = [];
  equipmentsDemandFieldsList: InterFaceActiveFields[] = [];

  constructor(private httpService: HttpService,
              private globalParamsMessage: GlobalParamsMessage) {
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

  // добавление категорий товаров
  public addEquipmentsCategory(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-equipments-category', data)
        .then((result: any) => {
            this.equipmentsCategoryList = [];
            this.globalParamsMessage.data = {title: result.msg, type: 'success', body: ''};
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении новой категорий оборудования', error);
            reject();
          }
        );
    });
  }

  // удаление категорий товаров
  public deleteEquipmentsCategory(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/delete-equipments-category', data)
        .then((result: any) => {
            this.equipmentsCategoryList = [];
            this.globalParamsMessage.data = {title: result.msg, type: 'success', body: ''};
            resolve();
          },
          (error) => {
            console.log('Ошибка при удалении категории оборудования', error);
            reject();
          }
        );
    });
  }

  // добавление типа товаров
  public addEquipmentsType(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-equipments-type', data)
        .then((result: any) => {
            this.equipmentsTypeList = [];
            this.globalParamsMessage.data = {title: result.msg, type: 'success', body: ''};
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении нового типа оборудования', error);
            reject();
          }
        );
    });
  }

  // удаление типа товаров
  public deleteEquipmentsType(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/delete-equipments-type', data)
        .then((result: any) => {
            this.equipmentsTypeList = [];
            this.globalParamsMessage.data = {title: result.msg, type: 'success', body: ''};
            resolve();
          },
          (error) => {
            console.log('Ошибка при удалении типа оборудования', error);
            reject();
          }
        );
    });
  }

  // добавление марки товаров
  public addEquipmentsMark(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-equipments-mark', data)
        .then((result: any) => {
            this.equipmentsMarkList = [];
            this.globalParamsMessage.data = {title: result.msg, type: 'success', body: ''};
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении новой марки оборудования', error);
            reject();
          }
        );
    });
  }

  // удаление типа марки
  public deleteEquipmentsMark(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/delete-equipments-mark', data)
        .then((result: any) => {
            this.equipmentsMarkList = [];
            this.globalParamsMessage.data = {title: result.msg, type: 'success', body: ''};
            resolve();
          },
          (error) => {
            console.log('Ошибка при удалении марки оборудования', error);
            reject();
          }
        );
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

  // получение списка товаров
  public getEquipmentsDemand(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-equipments-demand', data)
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

  // получение конкретной информации о товаре
  public getEquipmentInfo(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-equipments-info', data)
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

  // получение списка активных полей для спроса
  public getEquipmentsDemandFields() {
    return new Promise((resolve, reject) => {
      if (this.equipmentsDemandFieldsList.length === 0) {
        this.httpService.prepareQuery('api/get-equipments-demand-fields', '')
          .then((result: InterFaceActiveFields[]) => {
              this.equipmentsDemandFieldsList = result;
              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении списка полей для оборудования', error);
              reject();
            }
          );
      } else {
        resolve(this.equipmentsDemandFieldsList);
      }
    });
  }

  // изменение списка активных полей для таблицы
  public changeFields(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/change-equipments-fields', data)
        .then(() => {
            this.equipmentsFieldsList = [];
            resolve();
          },
          (error) => {
            console.log('Ошибка при изменение списка отображаемых полей', error);
            reject();
          }
        );
    });
  }

  // обновление статуса оборудования
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
      if (this.equipmentsMarkList.length === 0) {
        this.httpService.prepareQuery('api/get-equipment-mark', '')
          .then((result: any) => {
              this.equipmentsMarkList = [];
              this.equipmentsMarkList = result;
              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении списка марок', error);
              reject(error);
            }
          );
      } else {
        resolve(this.equipmentsMarkList);
      }
    });
  }

  // обновление информации об оборудовании
  public updateEquipment(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/equipments-update', data)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при изменении информации об оборудовании', error);
            reject(error);
          }
        );
    });
  }

  // удаление оборудования
  public deleteEquipment(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/delete-equipment', data)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при удалении оборудования', error);
            reject(error);
          }
        );
    });
  }

  // получение оборудования по поиску
  public searchEquipments(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-equipments-search', data)
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при поиске товаров', error);
            reject();
          }
        );
    });
  }

  // получение оборудования по филиалам
  public allEquipmentsBranch(data) {

    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-all-equipments-branch', data)
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при поиске товаров', error);
            reject();
          }
        );
    });
  }

  // получение детальной информации
  public getDemandInfo(id) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-equipments-demand-info', id)
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении спроса', error);
            reject();
          }
        );
    });
  }

  // сохранение информации по спросу
  public saveEqDemand(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/save-equipments-demand-info', data)
        .then(() => {
            this.globalParamsMessage.data = {title: 'Информация успешно сохранена', type: 'success', body: ''};
            resolve();
          },
          (error) => {
            console.log('Ошибка при получении спроса', error);
            reject();
          }
        );
    });
  }

  // отправка на объединение
  public sendUnification(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/send-unification', data)
        .then(() => {
            this.globalParamsMessage.data = {title: 'Записи успешно объединили', type: 'success', body: ''};
            resolve();
          },
          (error) => {
            console.log('Ошибка при получении спроса', error);
            reject();
          }
        );
    });
  }
}
