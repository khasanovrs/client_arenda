import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {ClientComponent} from './components/client/client.component';
import {UsersComponent} from './components/users/users.component';
import {PrintFormComponent} from './components/print_form/print_form.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }, {
    path: 'clients',
    component: ClientComponent
  }, {
    path: 'settings',
    children: [
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'print',
        component: PrintFormComponent,
      }
    ]
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
