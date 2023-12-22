import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:4200/api'; //  URL de tu API local

  constructor(private http: HttpClient) { }

  getArboles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/arboles`);
  }

  getFotos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/fotos`);
  }

  getFotosbyArbolId (arbol_id: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/fotos/arbolid/${arbol_id}`);
  }

  postComentario (datos: any){
    return this.http.post(`${this.apiUrl}/comentarios/post`, datos);
  }
}