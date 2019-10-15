import {Injectable} from '@angular/core';
import {HttpService} from '../utils/http/http.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DocumentService {

  constructor(private httpService: HttpService,
              private http: HttpClient) {
  }

  getPdf() {
    const httpOptions = {
      responseType: 'blob' as 'json',
      headers: new HttpHeaders()
    };

    return this.http.get('http://localhost:8004/api/get-doc', httpOptions);
  }
}
