import {Component, OnInit} from '@angular/core';
import {DopParamsService} from '../../services/dopParams.service';
import {UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  // список филиалов
  branches: InterFaceDopParams[] = [];
  // список ролей
  roles: InterFaceDopParams[] = [];
  // выбранный филиал
  currentBranch: InterFaceDopParams = {val: null, name: ''};
  // пользователи
  usersAdmin: InterFaceUsers[] = [];
  usersManager: InterFaceUsers[] = [];

  constructor(private usersService: UsersService,
              private dopParamsService: DopParamsService) {
  }

  ngOnInit() {
    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branches = data;
        this.currentBranch = data[0];
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
  }

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
}
