import {Component, OnInit} from '@angular/core';
import {SetsService} from './sets.service';
import {DopParamsService} from '../../services/dopParams.service';
import {ApplicationsService} from '../applications/applications.service';
import {DopParamsChangeService} from '../../services/dopParamsChange.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {EquipmentsService} from '../equipments/equipments.service';
import {StockService} from '../stock/stock.service';
import {FinanceService} from '../finance/finance.service';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
})
export class SetsComponent implements OnInit {
  // список статусов для клиентов
  clientStatusList: InterFaceDopParamsColor[] = [];
  // список статусов для заявок
  applicationStatusList: InterFaceDopParamsColor[] = [];
  // список статусов для оборудования
  equipmentsStatusList: InterFaceDopParamsColor[] = [];
  // список филиалов
  branchList: InterFaceDopParams[] = [];
  // список складов
  stocksList: InterFaceDopParams[] = [];
  // список скидок
  discountList: InterFaceDopParams[] = [];
  // список исчтоников
  sourceList: InterFaceDopParams[] = [];
  // права пользователя
  rightsList: InterFaceDopParamsCheckBox[] = [];
  // роли пользователя
  rolesList: InterFaceDopParams[] = [];
  // кассы
  financeCashBox: InterFaceFinanceCashBox[] = [];

  typeList: InterFaceTypeList[] = [
    {val: 'status_client', name: 'Статус для клиентов'},
    {val: 'status_application', name: 'Статус для заявок'},
    {val: 'status_equipment', name: 'Статус для оборудования'},
    {val: 'source', name: 'Источник'},
    {val: 'branch', name: 'Филиал'},
    {val: 'stock', name: 'Склад'},
    {val: 'discount', name: 'Скидка'},
    {val: 'right', name: 'Права'},
    {val: 'role', name: 'Роль'},
    {val: 'cashBox', name: 'Касса'}
  ];

  // новое поле
  newParams: InterFaceSets = {
    type: '',
    branch: null,
    name: '',
    sum: '0',
    color: '#000000'
  };

  constructor(private setsService: SetsService,
              private applicationsService: ApplicationsService,
              private dopParamsService: DopParamsService,
              private dopParamsChangeService: DopParamsChangeService,
              private globalParamsMessage: GlobalParamsMessage,
              private equipmentsService: EquipmentsService,
              private stockService: StockService,
              private financeService: FinanceService) {
  }

  ngOnInit() {
    this.dopParamsService.getStatusClient().then((data: InterFaceDopParamsColor[]) => {
        this.clientStatusList = data;
      },
      (error) => {
        console.log('Ошибка при получении статусов клиентов: ', error);
      });

    this.equipmentsService.getEquipmentsStatus().then((data: InterFaceDopParamsColor[]) => {
        this.equipmentsStatusList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка статусов оборудования: ', error);
      });

    this.applicationsService.getApplicationsStatus().then((data: InterFaceDopParamsColor[]) => {
        this.applicationStatusList = data;
      },
      (error) => {
        console.log('Ошибка при получении статусов заявок: ', error);
      });

    this.dopParamsService.getSource().then((data: InterFaceDopParamsColor[]) => {
        this.sourceList = data;
      },
      (error) => {
        console.log('Ошибка при получении источников: ', error);
      });


    this.dopParamsService.getBranch().then((data: InterFaceDopParamsColor[]) => {
        this.branchList = data;
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });

    this.dopParamsService.getDiscount().then((data: InterFaceDopParamsColor[]) => {
        this.discountList = data;
      },
      (error) => {
        console.log('Ошибка при получении скидок: ', error);
      });

    this.dopParamsService.getRights().then((data: InterFaceDopParamsCheckBox[]) => {
        this.rightsList = data;
      },
      (error) => {
        console.log('Ошибка при получении прав для пользователя: ', error);
      });

    this.dopParamsService.getRoles().then((data: InterFaceDopParamsColor[]) => {
        this.rolesList = data;
      },
      (error) => {
        console.log('Ошибка при получении ролей: ', error);
      });

    this.dopParamsService.getStock().then((data: InterFaceStocks[]) => {
        this.stocksList = data;
      },
      (error) => {
        console.log('Ошибка при получении складов: ', error);
      });

    this.financeService.getFinanceCashBOx().then((data: InterFaceFinanceCashBox[]) => {
        this.financeCashBox = data;
      },
      (error) => {
        console.log('Ошибка при получении касс: ', error);
      });
  }

  // добавление нового поля
  addParams() {
    if (this.newParams.type === '') {
      this.globalParamsMessage.data = {title: 'Необходимо выбрать раздел', type: 'error', body: ''};
      return false;
    }

    if (this.newParams.name === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать название', type: 'error', body: ''};
      return false;
    }

    if (this.newParams.type === 'status_application') {
      this.dopParamsChangeService.addApplicationsStatus(this.newParams).then(() => {
          this.globalParamsMessage.data = {title: 'Статус успешно добавлен', type: 'success', body: ''};
          this.applicationsService.applicationsStatusList = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении нового статуса для заявки: ', error);
        });
    }

    if (this.newParams.type === 'status_client') {
      this.dopParamsChangeService.addClientStatus(this.newParams).then(() => {
          this.globalParamsMessage.data = {title: 'Статус успешно добавлен', type: 'success', body: ''};
          this.dopParamsService.status = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении нового статуса для клиента: ', error);
        });
    }

    if (this.newParams.type === 'status_equipment') {
      this.dopParamsChangeService.addEquipmentStatus(this.newParams).then(() => {
          this.globalParamsMessage.data = {title: 'Статус успешно добавлен', type: 'success', body: ''};
          this.equipmentsService.equipmentsAvailabilityList = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении нового статуса для оборудования: ', error);
        });
    }

    if (this.newParams.type === 'source') {
      this.dopParamsChangeService.addSource(this.newParams).then(() => {
          this.globalParamsMessage.data = {title: 'Источник успешно добавлен', type: 'success', body: ''};
          this.dopParamsService.source = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении нового источника: ', error);
        });
    }

    if (this.newParams.type === 'branch') {
      this.dopParamsChangeService.addBranch(this.newParams).then(() => {
          this.globalParamsMessage.data = {title: 'Филиал успешно добавлен', type: 'success', body: ''};
          this.dopParamsService.branch = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении нового филиала: ', error);
        });
    }

    if (this.newParams.type === 'stock') {
      if (this.newParams.branch === null) {
        this.globalParamsMessage.data = {title: 'Необходимо выбрать филиал', type: 'error', body: ''};
        return false;
      }

      this.stockService.addStock(this.newParams).then(() => {
          this.globalParamsMessage.data = {title: 'Склад успешно добавлен', type: 'success', body: ''};
          this.dopParamsService.stock = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении нового склада: ', error);
        });
    }

    if (this.newParams.type === 'discount') {
      this.dopParamsChangeService.addDiscount(this.newParams).then(() => {
          this.globalParamsMessage.data = {title: 'Скидка успешно добавлена', type: 'success', body: ''};
          this.dopParamsService.discount = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении новой скидки: ', error);
        });
    }

    if (this.newParams.type === 'right') {
      this.dopParamsChangeService.addRights(this.newParams).then(() => {
          this.globalParamsMessage.data = {title: 'Права успешно добавлены', type: 'success', body: ''};
          this.dopParamsService.rights = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении нового права: ', error);
        });
    }

    if (this.newParams.type === 'role') {
      this.dopParamsChangeService.addRoles(this.newParams).then(() => {
          this.globalParamsMessage.data = {title: 'Роль успешно добавлена', type: 'success', body: ''};
          this.dopParamsService.roles = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении новой роли: ', error);
        });
    }

    if (this.newParams.type === 'cashBox') {
      this.financeService.addCashBox(this.newParams).then(() => {
          this.globalParamsMessage.data = {title: 'Касса успешно добавлена', type: 'success', body: ''};
          this.financeService.checkBox = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении новой кассы: ', error);
        });
    }

    this.newParams = {
      type: '',
      branch: null,
      name: '',
      sum: '0',
      color: '#000000'
    };
  }

  // удаление статуса для заявки
  deleteStatusApplication(id) {
    this.dopParamsChangeService.deleteApplicationsStatus({'id': id}).then(() => {
        this.globalParamsMessage.data = {title: 'Статус успешно удален', type: 'success', body: ''};
        this.applicationsService.applicationsStatusList = [];
        this.ngOnInit();
      },
      (error) => {
        console.log('Ошибка при удалении статуса для заявки: ', error);
      });
  }

  // удаление статуса для клиента
  deleteStatusClient(id) {
    this.dopParamsChangeService.deleteClientStatus({'id': id}).then(() => {
        this.globalParamsMessage.data = {title: 'Статус успешно удален', type: 'success', body: ''};
        this.dopParamsService.status = [];
        this.ngOnInit();
      },
      (error) => {
        console.log('Ошибка при удалении статуса для клиента: ', error);
      });
  }

  // удаление статуса для оборудования
  deleteStatusEquipment(id) {
    this.dopParamsChangeService.deleteEquipmentStatus({'id': id}).then(() => {
        this.globalParamsMessage.data = {title: 'Статус успешно удален', type: 'success', body: ''};
        this.equipmentsService.equipmentsAvailabilityList = [];
        this.ngOnInit();
      },
      (error) => {
        console.log('Ошибка при удалении статуса для оборудования: ', error);
      });
  }

  // удаление источника
  deleteSource(id) {
    this.dopParamsChangeService.deleteSource({'id': id}).then(() => {
        this.globalParamsMessage.data = {title: 'Источник успешно удален', type: 'success', body: ''};
        this.dopParamsService.source = [];
        this.ngOnInit();
      },
      (error) => {
        console.log('Ошибка при удалении источника: ', error);
      });
  }

  // удаление филиала
  deleteBranch(id) {
    this.dopParamsChangeService.deleteBranch({'id': id}).then(() => {
        this.globalParamsMessage.data = {title: 'Филиал успешно удален', type: 'success', body: ''};
        this.dopParamsService.branch = [];
        this.ngOnInit();
      },
      (error) => {
        console.log('Ошибка при удалении филиала: ', error);
      });
  }

  // удаление скидки
  deleteDiscount(id) {
    this.dopParamsChangeService.deleteDiscount({'id': id}).then(() => {
        this.globalParamsMessage.data = {title: 'Скидка успешно удалена', type: 'success', body: ''};
        this.dopParamsService.discount = [];
        this.ngOnInit();
      },
      (error) => {
        console.log('Ошибка при удалении скидки: ', error);
      });

  }

  // удаление склада
  deleteStock(id) {
    this.stockService.deleteStock({'id': id}).then(() => {
        this.globalParamsMessage.data = {title: 'Склад успешно удален', type: 'success', body: ''};
        this.dopParamsService.stock = [];
        this.ngOnInit();
      },
      (error) => {
        console.log('Ошибка при добавлении склада: ', error);
      });
  }

  // удаление роли
  deleteRole(id) {
    this.dopParamsChangeService.deleteRoles({'id': id}).then(() => {
        this.globalParamsMessage.data = {title: 'Роль успешно удалена', type: 'success', body: ''};
        this.dopParamsService.roles = [];
        this.ngOnInit();
      },
      (error) => {
        console.log('Ошибка при удалении роли: ', error);
      });
  }

  // удаление прав
  deleteRight(id) {
    this.dopParamsChangeService.deleteRights({'id': id}).then(() => {
        this.globalParamsMessage.data = {title: 'Права успешно удалены', type: 'success', body: ''};
        this.dopParamsService.rights = [];
        this.ngOnInit();
      },
      (error) => {
        console.log('Ошибка при удалении прав: ', error);
      });
  }

  // удаление прав
  deleteCashBox(id) {
    this.financeService.deleteCashBox({'id': id}).then(() => {
        this.globalParamsMessage.data = {title: 'Касса успешно удалена', type: 'success', body: ''};
        this.financeService.checkBox = [];
        this.ngOnInit();
      },
      (error) => {
        console.log('Ошибка при удалении кассы: ', error);
      });
  }
}

