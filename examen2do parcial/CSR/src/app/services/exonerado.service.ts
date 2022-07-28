import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
// CAMBIAR POR NOMBRE DE INTERFACE QUE PIDA
import { IDatos } from '../interfaces/IDatos';

@Injectable({
  providedIn: 'root'
})
export class VacacionesService {

  url = 'http://localhost:3000/api/vacaciones/';

  constructor(
    private _http: HttpClient
  ) { }

  createDatos(exonerado : IDatos) : Observable<any>{
    return this._http.post(this.url + 'agregar', exonerado);
  }

  readExonerados() : Observable<any>{
    return this._http.get(this.url);
  }

  readExonerado(idemp: string) : Observable<any>{
    return this._http.get(this.url + 'ver/' + idemp);
  }

  update(idemp: string, exonerado : IDatos) : Observable<any>{
    return this._http.patch(this.url + 'editar/' + idemp, exonerado);
  }

  delete(idemp: string) : Observable<any>{
    return this._http.delete(this.url + 'eliminar/' + idemp);
  }

}
