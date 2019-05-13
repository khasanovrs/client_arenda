import {Component} from '@angular/core';
import {MainService} from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
})
export class AppComponent {
  constructor(private mainService: MainService) {
    this.mainService.getData({phone: '79173936213', password: 'Demo'}).then((data: { status: string, data: object }) => {
        console.log('Результат в компоненте: ', data);
      },
      (error) => {
        console.log('Ошибка в компоненте: ', error);
      });
  }
}
