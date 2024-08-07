import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelefoneeModule } from './components/telefonee/telefonee.module';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DialogConfirmacaoComponent } from './components/shared/dialog-confirmacao/dialog-confirmacao.component';
import { NotificacaoComponent } from './components/shared/notificacao/notificacao.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogConfirmacaoComponent,
    NotificacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TelefoneeModule
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
