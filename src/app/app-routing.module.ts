import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {ClientComponent} from './components/client/client.component';
import {SettingsComponent} from './components/settings/settings.component';
import {ClientCreateComponent} from './components/client_create/clientCreate.component';
import {ClientInfoComponent} from './components/client_info/clientInfo.component';
import {StockComponent} from './components/stock/stock.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }, {
    path: 'clients',
    component: ClientComponent
  }, {
    path: 'client-create',
    component: ClientCreateComponent
  }, {
    path: 'clients/:id',
    component: ClientInfoComponent
  }, {
    path: 'settings',
    component: SettingsComponent
  }, {
    path: 'stock',
    component: StockComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {
  constructor() {
  }
}
