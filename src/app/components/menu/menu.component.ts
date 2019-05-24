import {Component} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  menuList: InterFaceMenu[];

  constructor() {
    this.menuList = [
      {link: '/', name: 'Рабочий стол', class: '---icon-menu-dashboard'},
      {link: '/rent.php', name: 'Прокат', class: '---icon-menu-rent'},
      {link: '/base.php', name: 'Склад', class: '---icon-menu-base'},
      {link: '/clients', name: 'Клиенты', class: '---icon-menu-clients'},
      {link: '/reports.php', name: 'Отчеты', class: '---icon-menu-report'},
      {link: 'settings', name: 'Настройки', class: '---icon-menu-settings'},
      {link: '/finance.php', name: 'Финансы', class: '---icon-menu-finance'},
      {link: '/orders.php', name: 'Заявки', class: '---icon-menu-orders'}
    ];
  }
}
