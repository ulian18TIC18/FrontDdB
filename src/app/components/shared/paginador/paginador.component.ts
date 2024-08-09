import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-paginador',
    templateUrl: './paginador.component.html',
    styleUrl: './paginador.component.css'
})
export class PaginadorComponent {

    @Input('total-registros')
    total_registros: number = 1;

    @Input('max-registros-pagina')
    max_registros_pagina: number = 1;

    @Input('pagina-atual')
    pagina_atual: number = 1;

    @Input('proxima')
    proxima: number = 0;

    @Input('anterior')
    anterior: number = 0;

    @Input('total-paginas')
    public set gera_paginas(n: number) {
        if (!Number.isInteger(n) || n < 1) {
            this.pags = [];
        } else if (n === 1) {
            this.pags = [1];
        } else {
            this.pags = Array.from({ length: n }, (_, i) => i + 1);
        }
    }
    
    @Output('pag-selecionada')
    newItemEvent = new EventEmitter<number>();
    
    pags: number[] = [];

    enviar_pagina_selecionada(pagina: number) {
        this.newItemEvent.emit(pagina);
    }

}
