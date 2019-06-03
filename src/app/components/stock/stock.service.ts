import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class StockService {

  constructor(private httpService: HttpService) {
  }
}
