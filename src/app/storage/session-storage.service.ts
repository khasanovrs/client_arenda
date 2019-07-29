import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class SessionStorageService {
  authenticated: EventEmitter<any> = new EventEmitter(false);

  constructor(private router: Router) {
  }

  get pubId(): string {
    return localStorage.getItem('pubId');
  }

  set pubId(value: string) {
    localStorage.setItem('pubId', value);
  }

  change(data) {
    this.authenticated.emit(data);
  }

  exit() {
    this.authenticated.emit(false);
    this.router.navigate(['/']);
    localStorage.removeItem('pubId');
  }


  getEmittedValue() {
    return this.authenticated;
  }
}
