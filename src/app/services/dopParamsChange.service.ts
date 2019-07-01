import {Injectable} from '@angular/core';
import {HttpService} from '../utils/http/http.service';

@Injectable()
export class DopParamsChangeService {

  constructor(private httpService: HttpService) {
  }

  // добавление статуса
  public addStatus(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-status', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении статуса', error);
            reject();
          }
        );
    });
  }

  // удаление статуса
  public deleteStatus(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/delete-status', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при удалении статуса', error);
            reject();
          }
        );
    });
  }

  // добавление источника
  public addSource(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-source', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении источника', error);
            reject();
          }
        );
    });
  }

  // удаление источника
  public deleteSource(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/delete-source', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при удалении источника', error);
            reject();
          }
        );
    });
  }

  // добавление филиала
  public addBranch(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-branch', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении филиала', error);
            reject();
          }
        );
    });
  }

  // удаление филиала
  public deleteBranch(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/delete-branch', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при удалении филиала', error);
            reject();
          }
        );
    });
  }

  // добавление скидки
  public addDiscount(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-discount', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении скидки', error);
            reject();
          }
        );
    });
  }

  // удаление скидки
  public deleteDiscount(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/delete-discount', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при удалении скидки', error);
            reject();
          }
        );
    });
  }

  // добавление роли
  public addRoles(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-roles', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении роли', error);
            reject();
          }
        );
    });
  }

  // удаление роли
  public deleteRoles(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/delete-roles', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при удалении роли', error);
            reject();
          }
        );
    });
  }

  // добавление права
  public addRights(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/add-rights', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при добавлении права', error);
            reject();
          }
        );
    });
  }

  // удаление права
  public deleteRights(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/delete-rights', data)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при удалении права', error);
            reject();
          }
        );
    });
  }
}
