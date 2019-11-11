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

  // получение доков
  save_word() {
    this.documentService.getPdf().subscribe((data) => {
      const downloadURL = window.URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'file.docx';
      link.click();
    });
  }

}
