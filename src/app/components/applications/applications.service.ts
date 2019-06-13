import {Injectable} from '@angular/core';

@Injectable()
export class ApplicationsService {
  clients: IClientsUr[] = [];
  activeFields: InterFaceActiveFields[] = [];

  constructor() {
  }

}
