import {Component, OnInit} from '@angular/core';
import {ApplicationsService} from './applications.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
})
export class ApplicationsComponent implements OnInit {

  constructor(private applicationsService: ApplicationsService) {
  }

  ngOnInit() {

  }

}
