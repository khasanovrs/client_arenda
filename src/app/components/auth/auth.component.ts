import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.less']
})
export class AuthComponent {
  phone = '';
  pass = '';
  date = new Date().toISOString();
  date1 = new Date().toLocaleString();


  constructor(private authService: AuthService,
              private globalParamsMessage: GlobalParamsMessage,
              private router: Router) {
  }

  auth() {
    if (this.phone === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать номер телефона', type: 'error', body: ''};
      return false;
    }

    if (this.pass === '') {
      this.globalParamsMessage.data = {title: 'Необходимо указать пароль', type: 'error', body: ''};
      return false;
    }

    const phone = this.phone.replace(/[\),\(,\-,+,\s]/g, '');

    this.authService.auth({phone: phone, password: this.pass}).then(() => {
        console.log('Авторизация прошла');
        this.router.navigate(['/main']);
      },
      (error) => {
        console.log('Ошибка при получении статусов: ', error);
      });
  }

}
