import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrl: './notificacao.component.css'
})
export class NotificacaoComponent {

  titulo: string = '';
  mensagem: string = '';
  cssClasses: string = '';

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.titulo = this.data.titulo;
    this.mensagem = this.data.mensagem;
    this.cssClasses = this.data.classes;
  }

  fechar() {
    this.snackBar.dismiss();
  }

}
