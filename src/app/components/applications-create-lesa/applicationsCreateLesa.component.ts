import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-applications-create-lesa',
  templateUrl: './applicationsCreateLesa.component.html',
})


export class ApplicationsCreateLesaComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  // смена филиала
  changeBranch(filter = '') {

  }

  // вычесляем сумму аренды
  changeSum() {

  }

  // смена статуса заявки
  changeStatusApplications(val) {

  }

  // поиск клиентов из бд
  searchClient(filter) {

  }

  // смена количества товара
  changeCount(equipment, type) {

  }

  // показ модального окна для добавления платежа
  showInsertSum() {
  }

  // заполнение данными из справочника
  insertClientData(index) {

  }

  // выбор оборудования
  insertEquipmentsData(index) {


  }

  // создание заявки
  addApplication() {

  }

  // удаление оборудования из списка
  deleteEquipment(index) {
  }

  // проверка через приставов
  getBailiffs() {

  }

  // добавляем платеж
  addPayList() {

  }

  // удаление платежа
  deletePayList(index) {
  }

  clear() {
  }
}
