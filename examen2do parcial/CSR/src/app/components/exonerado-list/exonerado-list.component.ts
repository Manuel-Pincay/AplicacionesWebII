import { Component, OnInit } from '@angular/core';
// CAMBIAR POR INTERFACE QUE PIDA
import { IDatos } from 'src/app/interfaces/IDatos';
import { VacacionesService } from 'src/app/services/exonerado.service';

@Component({
  selector: 'app-exonerado-list',
  templateUrl: './exonerado-list.component.html',
  styleUrls: ['./exonerado-list.component.css']
})
export class ExoneradoListComponent implements OnInit {

  public exonerado : IDatos[] = [];

  constructor(

    private _vacacionesService : VacacionesService

  ) { }

  ngOnInit(): void {
    this.obtenerTodosDatos();
  }

  obtenerExonerados(){
    this._vacacionesService.readExonerados().subscribe(response => {
      this.exonerado = response.data
    })
  }

  public obtenerTodosDatos(){
    this.obtenerExonerados();
  }

  eliminarExonerado(idemp : string | undefined){
    if(idemp){
      this._vacacionesService.delete(idemp).subscribe(({}) => {
        this.obtenerTodosDatos();
      })
    }
  }

}
