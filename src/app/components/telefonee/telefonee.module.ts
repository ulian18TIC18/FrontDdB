import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelefoneeListComponent } from './telefonee-list/telefonee-list.component';
import { TelefoneeFormComponent } from './telefonee-form/telefonee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  declarations: [
    TelefoneeListComponent,
    TelefoneeFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class TelefoneeModule { }
