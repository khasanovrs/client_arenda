import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class FinanceService {
  activeFields: InterFaceActiveFields[] = [];
  category: InterFaceDopParams[] = [];
  type: InterFaceDopParams[] = [];
  checkBox: InterFaceFinanceCashBox[] = [];

  constructor(private httpService: HttpService) {
  }

  // получение активных полей для финансов
  public getActiveFields() {
    return new Promise((resolve, reject) => {
      if (this.activeFields.length === 0) {
        this.httpService.prepareQuery('api/get-finance-fields', '')
          .then((result: InterFaceActiveFields[]) => {
              this.activeFields = result;
              resolve(this.activeFields);
            },
            (error) => {
              console.log('Ошибка при получении отображаемых полей для клиента', error);
              reject();
            }
          );
      } else {
        resolve(this.activeFields);
      }
    });
  }

  // получение категорий
  public getFinanceCategory() {
    return new Promise((resolve, reject) => {
      if (this.category.length === 0) {
        this.httpService.prepareQuery('api/get-finance-category', '')
          .then((result: InterFaceDopParams[]) => {
              this.category = result;
              resolve(this.category);
            },
            (error) => {
              console.log('Ошибка при получении категорий финансов', error);
              reject();
            }
          );
      } else {
        resolve(this.category);
      }
    });
  }

  // получение касс
  public getFinanceCashBOx() {
    return new Promise((resolve, reject) => {
      if (this.checkBox.length === 0) {
        this.httpService.prepareQuery('api/get-cashBox', '')
          .then((result: InterFaceFinanceCashBox[]) => {
              this.checkBox = result;
              resolve(this.checkBox);
            },
            (error) => {
              console.log('Ошибка при получении касс финансов', error);
              reject();
            }
          );
      } else {
        resolve(this.checkBox);
      }
    });
  }

  // получение типов
  public getFinanceType() {
    return new Promise((resolve, reject) => {
      if (this.type.length === 0) {
        this.httpService.prepareQuery('api/get-finance-type', '')
          .then((result: InterFaceDopParams[]) => {
              this.type = result;
              resolve(this.type);
            },
            (error) => {
              console.log('Ошибка при получении типов финансов', error);
              reject();
            }
          );
      } else {
        resolve(this.type);
      }
    });
  }

  // изменение списка активных полей для таблицы
  public changeFields(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/change-finance-field', data)
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

  // получение списка финансов
  public getFinance(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-finance', data)
        .then((result: InterFaceFinance[]) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении финансов', error);
            reject();
          }
        );
    });
  }

  // обновление статуса финансов
  public updateStatusFinance(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/update-category-finance', data)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при изменении статуса у финансов', error);
            reject(error);
          }
        );
    });
  }

  // добавление финансов
  public addFinance(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-finance', data)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при добавлении финансов', error);
            reject(error);
          }
        );
    });
  }

  // добавление финансов
  public addCashBox(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-cashBox', data)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при добавлении касы', error);
            reject(error);
          }
        );
    });
  }


  // удаление кассы
  public deleteCashBox(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/delete-cashBox', data)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при удалении касы', error);
            reject(error);
          }
        );
    });
  }

  // получение детальной информации по финансам
  public getFinanceInfo(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-finance-info', data)
        .then((result: InterFaceFinanceInfo) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении информации по финанасам', error);
            reject(error);
          }
        );
    });
  }
}
