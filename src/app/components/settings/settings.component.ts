import {Component} from '@angular/core';
import {DocumentService} from '../../services/document.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  // текущий таб
  currentTab = 'users';

  constructor(private documentService: DocumentService) {
  }

  // смена экрана
  changeTab(data) {
    this.currentTab = data;
  }
}
