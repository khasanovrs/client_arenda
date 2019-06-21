import {Component, OnInit} from '@angular/core';
import {GlobalParamsMessage} from './global-params-message';

@Component({
  selector: 'app-message-alert',
  templateUrl: './message_alert.component.html',
  styleUrls: ['./message_alert.scss']
})
export class MessageAlertComponent implements OnInit {
  data: any;

  constructor(private globalParamsMessage: GlobalParamsMessage) {
    this.data = globalParamsMessage;
  }

  ngOnInit() {
  }

  clear() {
    this.data.data.type = '';
    this.data.data.title = '';
    this.data.data.body = '';
  }
}
