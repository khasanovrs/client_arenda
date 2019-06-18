import {Component} from '@angular/core';
import {SessionService} from '../../services/session.service';
import {Router} from '@angular/router';
import {SessionStorageService} from '../../storage/session-storage.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private sessionService: SessionService,
              private router: Router,
              private sessionStorageService: SessionStorageService,
              private authService: AuthService) {
  }

  exit() {
    this.sessionService.exit().then(() => {
        this.sessionStorageService.pubId = '';
        this.authService.authenticated.emit(false);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Ошибка при выходе: ', error);
      });
  }
}
