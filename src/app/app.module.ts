import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/main/main.component';
import {MainService} from './components/main/main.service';
import {HttpService} from './utils/http/http.service';
import {HttpClientModule} from '@angular/common/http';
import {MessageAlertComponent} from './components/message_alert/message_alert.component';
import {ClarityModule} from '@clr/angular';
import {GlobalParamsMessage} from './components/message_alert/global-params-message';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MessageAlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [
    MainService,
    HttpService,
    GlobalParamsMessage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
