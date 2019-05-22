import {Component, OnInit} from '@angular/core';
import {MainService} from './main.service';
import {DopParamsService} from '../../services/dopParams.service';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
})
export class AppComponent implements OnInit {
  constructor(private mainService: MainService) {
  }

  ngOnInit() {

  }
}
