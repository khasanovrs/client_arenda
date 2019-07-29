import {Component, OnInit} from '@angular/core';
import {SessionStorageService} from './storage/session-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  checkAuth: Boolean = false;

  constructor(private sessionStorageService: SessionStorageService,
              private router: Router) {


    this.checkAuthRedirect();
  }

  ngOnInit() {
    this.sessionStorageService.getEmittedValue()
      .subscribe(item => this.checkAuth = item);
  }

  checkAuthRedirect() {
    if (this.checkAuth !== true) {
      this.router.navigate(['/']);
    } else {
      if (window.location.href === '') {
        this.router.navigate(['/main']);
      }
    }
  }
}


