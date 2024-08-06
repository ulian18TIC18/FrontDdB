import { TelefoneEmergencial } from "./telefone-emergencial.model";

export interface PagTelefonee {
    registros: TelefoneEmergencial[];
    total_registros: number;
    max_registros_pagina: number;
    pagina_atual: number;
    total_paginas: number;
    proxima: number;
    anterior: number;
    ordenacao: string | null;
}
