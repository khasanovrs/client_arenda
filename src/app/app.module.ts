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
import {UsersComponent} from './components/users/users.component';
import {UsersService} from './components/users/users.service';
import {SaleComponent} from './components/sale/sale.component';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {SettingsComponent} from './components/settings/settings.component';
import {ClientCreateComponent} from './components/client_create/clientCreate.component';
import {ClientCreateService} from './components/client_create/clientCreate.service';
import {ClientInfoService} from './components/client_info/clientInfo.service';
import {ClientInfoComponent} from './components/client_info/clientInfo.component';
import {StockComponent} from './components/stock/stock.component';
import {StockService} from './components/stock/stock.service';
import {EquipmentsService} from './components/equipments/equipments.service';
import {AuthComponent} from './components/auth/auth.component';
import {AuthService} from './components/auth/auth.service';
import {GlobalParams} from './storage/global-params';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

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
    UsersComponent,
    SaleComponent,
    SettingsComponent,
    ClientCreateComponent,
    ClientInfoComponent,
    StockComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [
    MainService,
    HttpService,
    GlobalParamsMessage,
    GlobalParams,
    SessionStorageService,
    ClientService,
    DopParamsService,
    UsersService,
    ClientCreateService,
    ClientInfoService,
    StockService,
    EquipmentsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
