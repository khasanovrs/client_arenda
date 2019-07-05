import {Component, OnInit} from '@angular/core';
import {ReportService} from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
})
export class ReportComponent implements OnInit {

  ngOnInit() {}

  constructor(private reportService: ReportService) {
  }

}
