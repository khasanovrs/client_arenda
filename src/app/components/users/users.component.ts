import {Component, OnInit} from '@angular/core';
import {DopParamsService} from '../../services/dopParams.service';
import {UsersService} from './users.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  // список филиалов
  branches: InterFaceDopParams[] = [];
  // список ролей
  roles: InterFaceDopParams[] = [];
  // список прав
  rights: InterFaceDopParamsCheckBox[] = [];
  // выбранный филиал
  currentBranch: InterFaceDopParams = {val: null, name: ''};
  // пользователи
  usersAdmin: InterFaceUsers[] = [];
  usersManager: InterFaceUsers[] = [];
  // объект для создания нового пользователя
  newUser: InterFaceNewUser = {
    id: null,
    fio: 'Добавить сотрудника',
    name_lastName: '',
    pass: '',
    user_type: {val: null, name: ''},
    branch_id: {val: null, name: ''},
    email: '',
    phone: '',
    user_right: [],
    btn: 'Создать'
  };

  constructor(private usersService: UsersService,
              private dopParamsService: DopParamsService,
              private globalParamsMessage: GlobalParamsMessage) {
  }

  ngOnInit() {
    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branches = data;
        this.currentBranch = data[0];
        this.newUser.branch_id = data[0];

        this.selectUsers(this.currentBranch);
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });

    this.dopParamsService.getRoles().then((data: InterFaceDopParams[]) => {
        this.roles = data;
      },
      (error) => {
        console.log('Ошибка при получении ролей: ', error);
      });

    this.dopParamsService.getRights().then((data: InterFaceDopParamsCheckBox[]) => {
        this.rights = data;
      },
      (error) => {
        console.log('Ошибка при получении прав для пользователя: ', error);
      });
  }

  // выбор филиала для вывода списка пользователей
  selectUsers(branch) {
    this.usersService.getUsers({branch: branch.val}).then((data: InterFaceUsers[]) => {
        this.usersAdmin = [];
        this.usersManager = [];

        for (const value of data) {
          if (value.user_type === 1) {
            this.usersAdmin.push(value);
          } else {
            this.usersManager.push(value);
          }
        }

      },
      (error) => {
        console.log('Ошибка при получении пользователей: ', error);
      });
  }

  // изменение прав у нового пользователя
  changeCheckbox(i) {
    this.rights[i].checked = !this.rights[i].checked;
  }

  // добавление нового пользователя
  addNewUser() {
    if (this.newUser.name_lastName === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать фио сотрудника', type: 'error', body: ''};
      return false;
    }

    if (this.newUser.pass === '' && this.newUser.id === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать пароль сотрудника', type: 'error', body: ''};
      return false;
    }

    if (this.newUser.phone === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать телефон сотрудника', type: 'error', body: ''};
      return false;
    }

    if (this.newUser.branch_id === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать филиал сотрудника', type: 'error', body: ''};
      return false;
    }

    if (this.newUser.user_type === null) {
      this.globalParamsMessage.data = {title: 'Необходимо указать роль сотрудника', type: 'error', body: ''};
      return false;
    }

    this.newUser.user_right = [];
    for (const value of this.rights) {
      if (value.checked) {
        this.newUser.user_right.push(value.val);
      }
    }

    this.usersService.addUsers({
      id: this.newUser.id,
      fio: this.newUser.name_lastName,
      pass: this.newUser.pass,
      phone: this.newUser.phone.replace(/[\),\(,\-,+,\s]/g, ''),
      branch_id: this.newUser.branch_id,
      user_type: this.newUser.user_type,
      email: this.newUser.email,
      user_right: this.newUser.user_right
    }).then(() => {
        this.globalParamsMessage.data = {title: 'Пользователь успешно добавлен', type: 'success', body: ''};
        this.clear();
        this.selectUsers(this.currentBranch);
      },
      (error) => {
        console.log('Ошибка при добавлении нового пользователей: ', error);
      });
  }

  // правка пользоввателя
  changeUser(client) {
    this.clear();
    this.newUser.id = client.id;
    this.newUser.fio = client.fio;
    this.newUser.name_lastName = client.fio;
    this.newUser.branch_id = client.branch_id;
    this.newUser.user_type = client.user_type;
    this.newUser.email = client.email;
    this.newUser.phone = client.phone;
    this.newUser.btn = 'Изменить';

    for (const value of this.rights) {
      for (const value2 of client.rights) {
        if (value2 === value.val) {
          value.checked = true;
        }
      }
    }
  }

  clear() {
    this.newUser = {
      id: null,
      fio: 'Добавить сотрудника',
      name_lastName: '',
      pass: '',
      user_type: null,
      branch_id: null,
      email: '',
      phone: '',
      user_right: [],
      btn: 'Создать'
    };

    for (const value of this.rights) {
      value.checked = false;
    }
  }
}
