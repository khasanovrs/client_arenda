import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SessionStorageService} from '../../storage/session-storage.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private router: Router,
              private sessionStorageService: SessionStorageService,
              private authService: AuthService) {
  }

  exit() {
    this.authService.exit().then(() => {
        this.sessionStorageService.pubId = '';
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Ошибка при выходе: ', error);
      });
  }
}
