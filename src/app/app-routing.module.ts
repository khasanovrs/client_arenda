import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {ClientComponent} from './components/client/client.component';
import {UsersComponent} from './components/users/users.component';


const routes: Routes = [
  {
    path: '',
    children: [],
    pathMatch: 'full',
    component: MainComponent
  }, {
    path: 'clients',
    component: ClientComponent
  }, {
    path: 'settings',
    component: UsersComponent
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
