import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './components/main/main.component';
import {ClientComponent} from './components/client/client.component';


const routes: Routes = [
  {
    path: '',
    children: [],
    pathMatch: 'full',
    component: AppComponent
  },{
    path: 'clients',
    component: ClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {
  constructor() {}
}
