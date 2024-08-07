import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarRef,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { NotificacaoComponent } from '../../components/shared/notificacao/notificacao.component';

export enum TipoNotificacao {
  SUCESSO = 'notificacao-sucesso',
  ALERTA = 'notificacao-alerta',
  ERRO = 'notificacao-erro',
  INFO = 'notificacao-info',
}

export interface Notificacao {
  titulo: string;
  mensagem: string;
}

export interface FieldMessage {
    fieldName: string;
    message: string;
}

export interface StandardError {
    timestamp: string;
    status: number;
    message: string;
    path: string;
    fieldErrors?: FieldMessage[];
}

@Injectable({ providedIn: 'root' })
export class NotificacaoService {

  snackBarConfig: MatSnackBarConfig;
  snackBarRef!: MatSnackBarRef<any>;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  snackBarAutoHide = '7000';

  notificationQueue: Notificacao[] = [];
  isInstanceVisible = false;

  constructor(private snackBar: MatSnackBar) {
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.horizontalPosition = this.horizontalPosition;
    this.snackBarConfig.verticalPosition = this.verticalPosition;
    this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
  }

  // adds an array of notifications and start the queue
  startNotificationQueue(notifications: Notificacao[], tipo?: TipoNotificacao) {
    this.notificationQueue = notifications;
    this.showNext(tipo);
  }

  // recursive method responsible of iterating over queue
  showNext(tipo?: TipoNotificacao) {
    // if (this.notificationQueue.length === 0) {
    //   return;
    // }
    const notification = this.notificationQueue.shift();
    if (notification) {
      this.isInstanceVisible = true;
      this.openNotificacao(notification, tipo);
      this.snackBarRef.afterDismissed().subscribe(() => {
        this.isInstanceVisible = false;
        this.showNext(tipo);
      });
    }
  }

  openNotificacao(
    toast: Notificacao,
    tipo: TipoNotificacao = TipoNotificacao.INFO
  ) {
    this.snackBarConfig.panelClass = ['notificacao', tipo];
    this.snackBarConfig.data = toast;
    this.snackBarRef = this.snackBar.openFromComponent(
      NotificacaoComponent,
      this.snackBarConfig
    );
  }

  openNotificacaoErro(toast: Notificacao) {
    this.snackBarConfig.panelClass = ['notificacao', 'notificacao-erro'];
    this.snackBarConfig.data = toast;
    this.snackBarRef = this.snackBar.openFromComponent(
      NotificacaoComponent,
      this.snackBarConfig
    );
  }

  showNotificationError(error: StandardError, frase: string) {
    let message: string = '';

    if (error.fieldErrors) {
      message = error.fieldErrors
        .map((e) => {
          return e.message;
        })
        .join('\n');
    } else {
      message = error.message;
    }

    this.openNotificacaoErro({ titulo: frase, mensagem: message });
  }
}
