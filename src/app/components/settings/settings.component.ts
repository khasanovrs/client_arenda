import {Component} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  // текущий таб
  currentTab = 'users';

  constructor() {
  }

  // смена экрана
  changeTab(data) {
    this.currentTab = data;
  }
}
