import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = `${environment.baseUrl}`

  getCurriculo() {
    return this.httpClient.get(`${this.apiUrl}curriculo`);
  }

  calcularIdade(data: string) {
    return Math.floor((new Date().getTime() - new Date(data).getTime()) / 31536000000);
  }
}
