import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelefoneeListComponent } from './components/telefonee/telefonee-list/telefonee-list.component';
import { TelefoneeFormComponent } from './components/telefonee/telefonee-form/telefonee-form.component';

const routes: Routes = [
  {
    path: '',
    component: TelefoneeListComponent,
  },
  { path: 'telefone', component: TelefoneeListComponent },
  { path: 'telefone/form', component: TelefoneeFormComponent },
  { path: 'telefone/form/:id', component: TelefoneeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
