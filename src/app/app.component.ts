import {Component} from '@angular/core';
import { Location } from '@angular/common';
import {GlobalParams} from './storage/global-params';
import {AuthService} from './components/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  checkAuth: Boolean = false;

  constructor(private globalParams: GlobalParams,
              private authService: AuthService,
              private router: Router,
              private location: Location) {

    const auth = localStorage.getItem('auth');
    this.checkAuth = auth === 'true';

    this.authService.getEmittedValue().subscribe(item => this.checkAuth = item);

    this.checkAuthRedirect();
  }

  checkAuthRedirect() {
    if (this.checkAuth !== true) {
      this.router.navigate(['/']);
    } else if (this.location.path() === '') {
      this.router.navigate(['/main']);
    }
  }
}


