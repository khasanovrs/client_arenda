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
import {EquipmentsCreateComponent} from './components/equipments_create/equipmentsCreate.component';
import {EquipmentsCreateService} from './components/equipments_create/equipmentsCreate.service';
import {EquipmentsComponent} from './components/equipments/equipments.component';
import {ApplicationsComponent} from './components/applications/applications.component';
import {ApplicationsService} from './components/applications/applications.service';
import {ApplicationsCreateService} from './components/applications-create/applicationsCreate.service';
import {ApplicationsCreateComponent} from './components/applications-create/applicationsCreate.component';
import {ApplicationsInfoComponent} from './components/applications-info/applicationsInfo.component';
import {FooterComponent} from './components/footer/footer.component';
import {SetsService} from './components/sets/sets.service';
import {SetsComponent} from './components/sets/sets.component';
import {DopParamsChangeService} from './services/dopParamsChange.service';
import {FinanceComponent} from './components/finance/finance.component';
import {FinanceService} from './components/finance/finance.service';
import {ReportService} from './components/reports/report.service';
import {ReportComponent} from './components/reports/report.component';
import {FinanceCreateComponent} from './components/finance_create/financeCreate.component';
import {FinanceInfoComponent} from './components/finance_info/financeInfo.component';
import {HireComponent} from './components/hire/hire.component';
import {HireService} from './components/hire/hire.service';
import {HireInfoComponent} from './components/hire-info/hireInfo.component';

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
    AuthComponent,
    EquipmentsCreateComponent,
    EquipmentsComponent,
    ApplicationsComponent,
    ApplicationsCreateComponent,
    ApplicationsInfoComponent,
    FooterComponent,
    SetsComponent,
    FinanceComponent,
    ReportComponent,
    FinanceCreateComponent,
    FinanceInfoComponent,
    HireComponent,
    HireInfoComponent
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
    AuthService,
    EquipmentsCreateService,
    ApplicationsService,
    ApplicationsCreateService,
    SetsService,
    DopParamsChangeService,
    FinanceService,
    ReportService,
    HireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
