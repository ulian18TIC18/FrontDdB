import { Component, OnInit } from '@angular/core';
import { TelefoneEmergencial } from '../../../core/model/telefone-emergencial.model';
import { TelefoneEmergencialService } from '../../../core/service/telefone-emergencial.service';
import { PagTelefonee } from '../../../core/model/pag-telefonee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telefonee-list',
  templateUrl: './telefonee-list.component.html',
  styleUrl: './telefonee-list.component.css'
})
export class TelefoneeListComponent implements OnInit {

  telefonese: PagTelefonee = {
    registros: [],
    total_registros: 0,
    max_registros_pagina: 0,
    pagina_atual: 0,
    total_paginas: 0,
    proxima: 0,
    anterior: 0,
    ordenacao: ''  
  };
  
  constructor(
    private router: Router,
    private telefoneService: TelefoneEmergencialService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.telefoneService.listar().subscribe(telefones => this.telefonese = telefones);
  }

  navegar_edicao(id: number): void {
    this.router.navigate(['/telefone/form', id]);
  }

  navegar_cadastro(): void {
    this.router.navigate(['/telefone/form']);
  }

  removerRegistro(registro: TelefoneEmergencial): void {
    this.telefoneService.remover(registro.id)
        .subscribe({
          next: (data) => {
            this.listar()
          },
          error: (e) => console.error(e)
        });
  }

}
