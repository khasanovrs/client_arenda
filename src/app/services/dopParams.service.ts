import {Injectable} from '@angular/core';
import {HttpService} from '../utils/http/http.service';

@Injectable()
export class DopParamsService {
  source: InterFaceDopParams [] = [];
  status: InterFaceDopParams [] = [];
  branch: InterFaceDopParams [] = [];
  rights: InterFaceDopParams [] = [];
  roles: InterFaceDopParams [] = [];
  stock: InterFaceStocks [] = [];
  discount: InterFaceDopParams [] = [];

  constructor(private httpService: HttpService) {
  }

  // получение источников
  public getSource() {
    return new Promise((resolve, reject) => {
      if (this.source.length === 0) {
        this.httpService.prepareQuery('api/get-source')
          .then((result: InterFaceDopParams []) => {
              this.source = result;
              resolve(this.source);
            },
            (error) => {
              console.log('Ошибка при получении источников', error);
              reject();
            }
          );
      } else {
        resolve(this.source);
      }
    });
  }

  // получение статусов
  public getStatus() {
    return new Promise((resolve, reject) => {
      if (this.status.length === 0) {
        this.httpService.prepareQuery('api/get-status', '')
          .then((result: InterFaceDopParams []) => {
              this.status = result;
              resolve(this.status);
            },
            (error) => {
              console.log('Ошибка при получении статусов', error);
              reject();
            }
          );
      } else {
        resolve(this.status);
      }
    });
  }

  // получение филиалов
  public getBranch() {
    return new Promise((resolve, reject) => {
      if (this.branch.length === 0) {
        this.httpService.prepareQuery('api/get-branch', '')
          .then((result: InterFaceDopParams []) => {
              this.branch = result;
              resolve(this.branch);
            },
            (error) => {
              console.log('Ошибка при получении филиалов', error);
              reject();
            }
          );
      } else {
        resolve(this.branch);
      }
    });
  }

  // получение списка складов
  public getStock() {
    return new Promise((resolve, reject) => {
      if (this.stock.length === 0) {
        this.httpService.prepareQuery('api/get-stock', '')
          .then((result: InterFaceStocks[]) => {
              this.stock = result;
              resolve(this.stock);
            },
            (error) => {
              console.log('Ошибка при получении списка складов', error);
              reject();
            }
          );
      } else {
        resolve(this.stock);
      }
    });
  }

  // получение ролей
  public getRoles() {
    return new Promise((resolve, reject) => {
      if (this.roles.length === 0) {
        this.httpService.prepareQuery('api/get-roles', '')
          .then((result: InterFaceDopParams []) => {
              this.roles = result;
              resolve(this.roles);
            },
            (error) => {
              console.log('Ошибка при получении ролей', error);
              reject();
            }
          );
      } else {
        resolve(this.roles);
      }
    });
  }

  // получение прав
  public getRights() {
    return new Promise((resolve, reject) => {
      if (this.rights.length === 0) {
        this.httpService.prepareQuery('api/get-rights', '')
          .then((result: InterFaceDopParamsCheckBox []) => {
              this.rights = result;
              resolve(this.rights);
            },
            (error) => {
              console.log('Ошибка при получении прав для пользователя', error);
              reject();
            }
          );
      } else {
        resolve(this.rights);
      }
    });
  }

  // получение скидок
  public getDiscount() {
    return new Promise((resolve, reject) => {
      if (this.discount.length === 0) {
        this.httpService.prepareQuery('api/get-discount', '')
          .then((result: InterFaceDopParams []) => {
              this.discount = result;
              resolve(this.discount);
            },
            (error) => {
              console.log('Ошибка при получении списка скидок', error);
              reject();
            }
          );
      } else {
        resolve(this.discount);
      }
    });
  }
}
