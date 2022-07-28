import { Component, OnInit } from '@angular/core';
import { IDatos } from 'src/app/interfaces/IDatos';
import { VacacionesService } from 'src/app/services/exonerado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exonerado-create',
  templateUrl: './exonerado-create.component.html',
  styleUrls: ['./exonerado-create.component.css']
})
export class ExoneradoCreateComponent implements OnInit {

  public exonerado : IDatos = {} as IDatos;


  constructor(
    private _vacacionesService : VacacionesService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  public agregarExonerado(){
    this._vacacionesService.createDatos(this.exonerado).subscribe((response) => {
      this.router.navigate(['/']).then();
    }, (error) => {
      console.log(error);
      
    })
  }

}
