import {Component, OnInit} from '@angular/core';
import {SetsService} from './sets.service';
import {DopParamsService} from '../../services/dopParams.service';
import {ApplicationsService} from '../applications/applications.service';
import {DopParamsChangeService} from '../../services/dopParamsChange.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {EquipmentsService} from '../equipments/equipments.service';
import {StockService} from '../stock/stock.service';
import {FinanceService} from '../finance/finance.service';
import {HireService} from '../hire/hire.service';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
})
export class SetsComponent implements OnInit {
  showClientStatus = false;
  showAppStatus = false;
  showHireStatus = false;
  showEqStatus = false;
  showFinanceCategory = false;
  showSource = false;
  showBranch = false;
  showDiscount = false;
  showStock = false;
  showRight = false;
  showRole = false;
  showCashBox = false;
  showCategoryList = false;
  showTypeList = false;
  showMarkList = false;

  // список статусов для клиентов
  clientStatusList: InterFaceDopParamsColor[] = [];
  // список статусов для заявок
  applicationStatusList: InterFaceDopParamsColor[] = [];
  // список статусов для проката
  hireStatusList: InterFaceDopParamsColor[] = [];
  // список статусов для оборудования
  equipmentsStatusList: InterFaceDopParamsColor[] = [];
  // список филиалов
  branchList: InterFaceBranch[] = [];
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
  // категории оборудования
  equipmentsCategoryList: InterFaceDopParams[] = [];
  // тип оборудования
  equipmentsTypeList: InterFaceDopParams[] = [];
  // марка оборудования
  equipmentsMarkList: InterFaceDopParams[] = [];
  // категория финансов
  financeCategory: InterFaceDopParams[] = [];

  typeList: InterFaceTypeList[] = [
    {val: 'finance_category', name: 'Категория финансов'},
    {val: 'source', name: 'Источник'},
    {val: 'branch', name: 'Филиал'},
    {val: 'stock', name: 'Склад'},
    {val: 'discount', name: 'Скидка'},
    {val: 'right', name: 'Права'},
    {val: 'role', name: 'Роль'},
    {val: 'cashBox', name: 'Касса'},
    {val: 'category_eq', name: 'Категория оборудования'},
    {val: 'type_eq', name: 'Тип оборудования'},
    {val: 'mark_eq', name: 'Марка оборудования'}
  ];

  pledgeList = [
    {val: '0', name: 'Нет'},
    {val: '1', name: 'Да'}
  ];

  // новое поле
  newParams: InterFaceSets = {
    type: '',
    branch: null,
    name: '',
    sum: '0',
    color: '#000000',
    val: '',
    region: '',
    category_id: null,
    zalog: '0',
    delivery: '0',
    time_diff: '0'
  };

  constructor(private setsService: SetsService,
              private applicationsService: ApplicationsService,
              private dopParamsService: DopParamsService,
              private dopParamsChangeService: DopParamsChangeService,
              private globalParamsMessage: GlobalParamsMessage,
              private equipmentsService: EquipmentsService,
              private stockService: StockService,
              private financeService: FinanceService,
              private hireService: HireService) {
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


    this.dopParamsService.getBranch().then((data: InterFaceBranch[]) => {
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

    this.equipmentsService.getEquipmentsCategory().then((data: InterFaceDopParams[]) => {
        this.equipmentsCategoryList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка категорий оборудования: ', error);
      });

    this.equipmentsService.getEquipmentsType().then((data: InterFaceDopParams[]) => {
        this.equipmentsTypeList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка категорий оборудования: ', error);
      });

    this.equipmentsService.getEquipmentsMark().then((data: InterFaceDopParams[]) => {
        this.equipmentsMarkList = data;
      },
      (error) => {
        console.log('Ошибка при получении списка марков оборудования: ', error);
      });

    this.hireService.getHireStatus().then((data: InterFaceDopParamsColor[]) => {
        this.hireStatusList = data;
      },
      (error) => {
        console.log('Ошибка при получении статусов проката: ', error);
      });

    this.financeService.getFinanceCategory().then((data: InterFaceDopParams[]) => {
        this.financeCategory = data;
      },
      (error) => {
        console.log('Ошибка при получении категорий: ', error);
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

    if (this.newParams.type === 'source') {
      this.dopParamsChangeService.addSource(this.newParams).then(() => {
          this.dopParamsService.source = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении нового источника: ', error);
        });
    }

    if (this.newParams.type === 'branch') {
      this.dopParamsChangeService.addBranch(this.newParams).then(() => {
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
          this.dopParamsService.stock = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении нового склада: ', error);
        });
    }

    if (this.newParams.type === 'discount') {
      this.dopParamsChangeService.addDiscount(this.newParams).then(() => {
          this.dopParamsService.discount = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении новой скидки: ', error);
        });
    }

    if (this.newParams.type === 'right') {
      this.dopParamsChangeService.addRights(this.newParams).then(() => {
          this.dopParamsService.rights = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении нового права: ', error);
        });
    }

    if (this.newParams.type === 'role') {
      this.dopParamsChangeService.addRoles(this.newParams).then(() => {
          this.dopParamsService.roles = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении новой роли: ', error);
        });
    }

    if (this.newParams.type === 'cashBox') {
      this.financeService.addCashBox(this.newParams).then(() => {
          this.financeService.checkBox = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении новой кассы: ', error);
        });
    }

    if (this.newParams.type === 'category_eq') {
      this.equipmentsService.addEquipmentsCategory(this.newParams).then(() => {
          this.equipmentsService.equipmentsCategoryList = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении новой категории оборудования: ', error);
        });
    }

    if (this.newParams.type === 'type_eq') {
      if (this.newParams.category_id === null) {
        this.globalParamsMessage.data = {title: 'Необходимо указать категорию', type: 'error', body: ''};
        return false;
      }

      this.equipmentsService.addEquipmentsType(this.newParams).then(() => {
          this.equipmentsService.equipmentsTypeList = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении нового типа оборудования: ', error);
        });
    }

    if (this.newParams.type === 'mark_eq') {
      this.equipmentsService.addEquipmentsMark(this.newParams).then(() => {
          this.equipmentsService.equipmentsMarkList = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении новой марки оборудования: ', error);
        });
    }

    if (this.newParams.type === 'finance_category') {
      this.financeService.addFinanceCategory(this.newParams).then(() => {
          this.financeService.category = [];
          this.ngOnInit();
        },
        (error) => {
          console.log('Ошибка при добавлении новой категории для финансов: ', error);
        });
    }

    this.clearNewParams();
  }

  // очистка формы создания
  clearNewParams() {
    this.newParams = {
      type: '',
      branch: null,
      delivery: '0',
      name: '',
      sum: '0',
      color: '#000000',
      val: '',
      region: '',
      zalog: '0',
      time_diff: '0',
      category_id: null
    };
  }

  // заполенение формы готовыми данными
  changeParams(val, type) {
    this.newParams = val;
    this.newParams.type = type;
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

  // удаление категории
  deleteCategoryEq(id) {
    this.equipmentsService.deleteEquipmentsCategory({'id': id}).then(() => {
        this.globalParamsMessage.data = {title: 'Категория оборудования успешно удалена', type: 'success', body: ''};
        this.equipmentsService.equipmentsCategoryList = [];
        this.ngOnInit();
      },
      (error) => {
        console.log('Ошибка при удалении категории оборудования: ', error);
      });
  }

  // удаление типа
  deleteTypeEq(id) {
    this.equipmentsService.deleteEquipmentsType({'id': id}).then(() => {
        this.globalParamsMessage.data = {title: 'Тип оборудования успешно удален', type: 'success', body: ''};
        this.equipmentsService.equipmentsTypeList = [];
        this.ngOnInit();
      },
      (error) => {
        console.log('Ошибка при удалении типа оборудования: ', error);
      });
  }

  // удаление типа
  deleteMarkEq(id) {
    this.equipmentsService.deleteEquipmentsMark({'id': id}).then(() => {
        this.globalParamsMessage.data = {title: 'Марка оборудования успешно удалена', type: 'success', body: ''};
        this.equipmentsService.equipmentsMarkList = [];
        this.ngOnInit();
      },
      (error) => {
        console.log('Ошибка при удалении марки оборудования: ', error);
      });
  }

  // удаление типа
  deleteFinanceCategory(id) {
    this.financeService.deleteFinanceCategory({'id': id}).then(() => {
        this.globalParamsMessage.data = {title: 'Категория финансов успешно удалена', type: 'success', body: ''};
        this.equipmentsService.equipmentsMarkList = [];
        this.ngOnInit();
      },
      (error) => {
        console.log('Ошибка при удалении категории финансов: ', error);
      });
  }
}

