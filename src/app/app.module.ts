import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppComponent} from './app.component';
import {MainService} from './components/main/main.service';
import {HttpService} from './utils/http/http.service';
import {HttpClientModule} from '@angular/common/http';
import {MessageAlertComponent} from './components/message_alert/message_alert.component';
import {ClarityModule} from '@clr/angular';
import {GlobalParamsMessage} from './components/message_alert/global-params-message';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SessionStorageService} from './storage/session-storage.service';
import {MenuComponent} from './components/menu/menu.component';
import {HeaderComponent} from './components/header/header.component';
import {ClientComponent} from './components/client/client.component';
import {AppRoutingModule} from './app-routing.module';
import {ClientService} from './components/client/client.service';
import {DigitsNumbersPipe} from './pipes/digits_numbers.pipe';
import {TelephoneNumberPipe} from './pipes/telephone_number.pipe';
import {DopParamsService} from './services/dopParams.service';
import {FormsModule} from '@angular/forms';
import {MainComponent} from './components/main/main.component';
import {SettingsComponent} from './components/settings/settings.component';
import {SettingsService} from './components/settings/settings.service';

@NgModule({
  declarations: [
    DigitsNumbersPipe,
    TelephoneNumberPipe,
    AppComponent,
    MainComponent,
    MessageAlertComponent,
    MenuComponent,
    HeaderComponent,
    ClientComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MainService,
    HttpService,
    GlobalParamsMessage,
    SessionStorageService,
    ClientService,
    DopParamsService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
