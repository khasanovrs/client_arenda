import {Injectable} from '@angular/core';
import {HttpService} from '../utils/http/http.service';

@Injectable()
export class DopParamsService {
  source: InterFaceDopParams [] = [];
  status: InterFaceDopParams [] = [];
  branch: InterFaceDopParams [] = [];

  constructor(private httpService: HttpService) {
  }

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
}
