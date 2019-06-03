import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class EquipmentsService {
  equipmentsTypeList: InterFaceDopParams[] = [];
  equipmentsCategoryList: InterFaceDopParams[] = [];
  equipmentsFieldsList: InterFaceActiveFields[] = [];

  constructor(private httpService: HttpService) {
  }


  public getEquipmentsType() {
    // получение списка складов
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

  public getEquipmentsCategory() {
    // получение списка складов
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

  public getEquipments() {
    // получение списка складов
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-equipments', '')
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка категорий оборудования', error);
            reject();
          }
        );
    });
  }


  public getEquipmentsFields() {
    // получение списка складов
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
}
