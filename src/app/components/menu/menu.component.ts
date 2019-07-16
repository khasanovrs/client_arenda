import {Component} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  menuList: InterFaceMenu[];

  constructor() {
    this.menuList = [
      {link: 'main', name: 'Рабочий стол', class: '---icon-menu-dashboard'},
      {link: 'hire', name: 'Прокат', class: '---icon-menu-rent'},
      {link: 'stock', name: 'Склад', class: '---icon-menu-base'},
      {link: 'clients', name: 'Клиенты', class: '---icon-menu-clients'},
      {link: 'report', name: 'Отчеты', class: '---icon-menu-report'},
      {link: 'settings', name: 'Настройки', class: '---icon-menu-settings'},
      {link: 'finance', name: 'Финансы', class: '---icon-menu-finance'},
      {link: 'application', name: 'Заявки', class: '---icon-menu-orders'},
      {link: 'sets', name: 'Наборы', class: '---icon-menu-orders'}
    ];
  }
}
