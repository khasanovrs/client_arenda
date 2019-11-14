import {Component, OnInit} from '@angular/core';
import {SessionStorageService} from './storage/session-storage.service';
import {Router} from '@angular/router';
import {AuthService} from './components/auth/auth.service';
import {GlobalParamsUser} from './storage/global-params-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  checkAuth: Boolean = this.sessionStorageService.pubId !== null;
  HiddenMenu = false;
  userType = this.globalParamsUser.type;

  constructor(private sessionStorageService: SessionStorageService,
              private authService: AuthService,
              public globalParamsUser: GlobalParamsUser,
              private router: Router) {

    this.checkAuthRedirect();
  }

  ngOnInit() {
    this.sessionStorageService.authenticated.subscribe(item => {
      this.checkAuth = item;
    });

    this.authService.refreshAuthClientInfo.subscribe(() => {
      this.userType = this.globalParamsUser.type;
    });
  }

  checkAuthRedirect() {
    if (!this.checkAuth) {
      this.router.navigate(['/']);
    } else {
      if (location.pathname === '/') {
        this.router.navigate(['/main']);
      }

      this.authService.getUser().then(() => {
          console.log('Данные по клиенту успешно получены');
        },
        (error) => {
          console.log('Ошибка при получении данных по клиенту: ', error);
        });
    }
  }

  public doSomething(date: any): void {
    this.HiddenMenu = date;
  }
}


