import { TelefoneEmergencial } from "./telefone-emergencial.model";

export class PagTelefonee {
    registros?: TelefoneEmergencial[];
    total_registros: number = 0;
    max_registros_pagina: number = 1;
    pagina_atual: number = 1;
    total_paginas: number = 0;
    proxima: number = 0;
    anterior: number = 0;
    ordenacao?: string | null;
}
