import {Injectable} from '@angular/core';

@Injectable()
export class SessionStorageService {

  constructor() {
  }

  get pubId(): string {
    return localStorage.getItem('pubId');
  }

  set pubId(value: string) {
    localStorage.setItem('pubId', value);
  }
}
