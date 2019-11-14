import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GlobalParamsUser} from '../../storage/global-params-user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  @Output() onCloseMenu: EventEmitter<any> = new EventEmitter<any>();
  @Input() userType = null;
  hiddenMenu = false;

  menuList: InterFaceMenu[] = [
    {link: 'main', name: 'Рабочий стол', class: '---icon-menu-dashboard', type: 'all'},
    {link: 'hire', name: 'Прокат', class: '---icon-menu-rent', type: 'all'},
    {link: 'stock', name: 'Склад', class: '---icon-menu-base', type: 'all'},
    {link: 'clients', name: 'Клиенты', class: '---icon-menu-clients', type: 'admin'},
    {link: 'report', name: 'Отчеты', class: '---icon-menu-report', type: 'all'},
    {link: 'settings', name: 'Настройки', class: '---icon-menu-settings', type: 'all'},
    {link: 'finance', name: 'Финансы', class: '---icon-menu-finance', type: 'all'},
    {link: 'application', name: 'Заявки', class: '---icon-menu-orders', type: 'all'},
    {link: 'sets', name: 'Наборы', class: '---icon-menu-orders', type: 'all'}
  ];
  showMenuList: InterFaceMenu[];

  constructor(public globalParamsUser: GlobalParamsUser) {
  }

  ngOnInit() {
    if (this.userType === 1) {
      this.showMenuList = this.menuList;
    } else {
      this.showMenuList = this.menuList.filter(item => item.type === 'all');
    }
  }

  public closeMenu(): void {
    this.onCloseMenu.emit(this.hiddenMenu = !this.hiddenMenu);
  }
}
