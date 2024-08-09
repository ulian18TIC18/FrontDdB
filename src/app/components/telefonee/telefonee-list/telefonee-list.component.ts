import { Component, OnInit } from '@angular/core';
import { TelefoneEmergencial } from '../../../core/model/telefone-emergencial.model';
import { TelefoneEmergencialService } from '../../../core/service/telefone-emergencial.service';
import { PagTelefonee } from '../../../core/model/pag-telefonee.model';
import { Router } from '@angular/router';
import { DialogConfirmacaoComponent } from '../../shared/dialog-confirmacao/dialog-confirmacao.component';
import { MatDialog } from '@angular/material/dialog';
import { NotificacaoService, StandardError, TipoNotificacao } from '../../../core/helper/notificacao.service';
import { FiltroTelE } from '../../../core/model/filtro-tel-e.model';

@Component({
  selector: 'app-telefonee-list',
  templateUrl: './telefonee-list.component.html',
  styleUrl: './telefonee-list.component.css'
})
export class TelefoneeListComponent implements OnInit {

  telefonese: PagTelefonee = new PagTelefonee();

  filtro: FiltroTelE = new FiltroTelE();
  
  constructor(
    private dialog: MatDialog,
    private notificacaoService: NotificacaoService,
    private router: Router,
    private telefoneService: TelefoneEmergencialService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.telefoneService.listar(new FiltroTelE())
      .subscribe(telefones => {
        this.telefonese = telefones
      });
  }

  onPaginadorClicked(pag_selecionada: number): void {
    this.filtro.pag = pag_selecionada;
    this.telefoneService.listar(this.filtro)
      .subscribe(
        {
          next: (telefones) => {
            this.telefonese = telefones
          },
          error: (e) => {
            this.notificacaoService.showNotificationError(
              e.error as StandardError,
              'Falha ao tentar listar telefones'
            );
          }
        }
      );
  }

  navegar_edicao(id: number): void {
    this.router.navigate(['/telefone/form', id]);
  }

  navegar_cadastro(): void {
    this.router.navigate(['/telefone/form']);
  }

  removerRegistro(registro: TelefoneEmergencial): void {

    const dialogRef = this.dialog.open(DialogConfirmacaoComponent, {
      width: '30%',
      data: {
        titulo: 'Confirmação',
        mensagem: 'Deseja realmente excluir?',
      },
      panelClass: 'dialog-no-padding',
    });

    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm) {

        this.telefoneService.remover(registro.id)
            .subscribe({
              next: (data) => {
                this.notificacaoService.openNotificacao(
                  {
                    titulo: 'Sucesso',
                    mensagem: 'Telefone removido com sucesso',
                  },
                  TipoNotificacao.SUCESSO
                );
                this.listar()
              },
              error: (e) => {
                this.notificacaoService.showNotificationError(
                  e.error as StandardError,
                  'Falha ao tentar remover telefone'
                );
              }
            });

      }
    });


  }

}
