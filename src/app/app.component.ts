import {Component} from '@angular/core';
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
              private router: Router) {
    this.checkAuth = this.authService.getEmittedValue().subscribe(item => this.checkAuth = item);

    this.checkAuthRedirect();
  }

  checkAuthRedirect() {
    if (this.checkAuth !== true) {
      this.router.navigate(['/']);
    }
  }
}


