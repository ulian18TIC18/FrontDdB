import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TelefoneEmergencial } from '../model/telefone-emergencial.model';
import { PagTelefonee } from '../model/pag-telefonee.model';
import { FiltroTelE } from '../model/filtro-tel-e.model';



@Injectable({
  providedIn: 'root'
})
export class TelefoneEmergencialService {

  private apiUrl = 'http://localhost:8000/api/telefone';

  constructor(private http: HttpClient) { }

  listar(filtro: { [key: string]: any }): Observable<PagTelefonee> {
    let params = new HttpParams();

    Object.keys(filtro).forEach(key => {
      const value = filtro[key];
      if (value !== null && value !== undefined) {
        params = params.set(key, value.toString());
      }
    });

    return this.http.get<PagTelefonee>(
      `${this.apiUrl}/`,
      { params }
    );
  }

  buscarPorId(id: number): Observable<TelefoneEmergencial> {
    return this.http.get<TelefoneEmergencial>(
      `${this.apiUrl}/${id}/`
    );
  }

  criar(telefone: TelefoneEmergencial): Observable<TelefoneEmergencial> {
    return this.http.post<TelefoneEmergencial>(
      `${this.apiUrl}/criar/`,
      telefone
    );
  }

  atualizar(id: number, telefone: TelefoneEmergencial): Observable<TelefoneEmergencial> {
    return this.http.put<TelefoneEmergencial>(
      `${this.apiUrl}/atualizar/${id}/`,
      telefone
    );
  }

  remover(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/remover/${id}/`
    );
  }

  removerLista(ids: number[]): Observable<void> {
    return this.http.request<void>(
      'delete', `${this.apiUrl}/remover/`,
      { body: { ids } }
    );
  }

}
