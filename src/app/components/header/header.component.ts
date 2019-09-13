import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SessionStorageService} from '../../storage/session-storage.service';
import {AuthService} from '../auth/auth.service';
import {DopParamsService} from '../../services/dopParams.service';
import {MainService} from '../main/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  branches: InterFaceDopParams[] = [];
  branch = null;
  revenue = '0';

  constructor(private router: Router,
              private sessionStorageService: SessionStorageService,
              private authService: AuthService,
              private dopParamsService: DopParamsService,
              private mainService: MainService) {

    this.dopParamsService.getBranch().then((data: InterFaceDopParams[]) => {
        this.branches = data;
        this.branch = this.branches[0].val;
        //this.getRevenue();
      },
      (error) => {
        console.log('Ошибка при получении филиалов: ', error);
      });
  }

  exit() {
    this.authService.exit().then(() => {
        console.log('Выход успешный');
      },
      (error) => {
        console.log('Ошибка при выходе: ', error);
      });
  }

/*  // получение выручки по филиалам
  getRevenue() {
    this.mainService.getRevenue({
      branch: this.branch
    }).then((data: any) => {
        this.revenue = data;
      },
      (error) => {
        console.log('Ошибка при получении выручки: ', error);
      });
  }*/
}
