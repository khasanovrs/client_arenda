import {Component} from '@angular/core';
import {SettingsParamsService} from './settingsParams.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';

@Component({
  selector: 'app-settings-params',
  templateUrl: './settingsParams.component.html',
})
export class SettingsParamsComponent {
  // настройки
  settings: InterFaceSettings[] = [];

  constructor(private settingsParamsService: SettingsParamsService,
              private globalParamsMessage: GlobalParamsMessage) {
    this.settingsParamsService.getSettings().then((data: InterFaceSettings[]) => {
        this.settings = data;
      },
      (error) => {
        console.log('Ошибка при получении настроек: ', error);
      });
  }

  updateSettings() {
    const setting = this.settings[0];
    this.settingsParamsService.addSettings({id: setting.id, val: setting.val}).then(() => {
        this.globalParamsMessage.data = {title: 'Настройки обновлены', type: 'success', body: ''};
      },
      (error) => {
        console.log('Ошибка при обновлении настроек: ', error);
      });
  }
}
