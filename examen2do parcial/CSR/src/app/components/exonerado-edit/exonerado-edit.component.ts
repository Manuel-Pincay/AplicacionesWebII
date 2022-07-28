import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IDatos } from 'src/app/interfaces/IDatos';
import { VacacionesService } from 'src/app/services/exonerado.service';

@Component({
  selector: 'app-exonerado-edit',
  templateUrl: './exonerado-edit.component.html',
  styleUrls: ['./exonerado-edit.component.css']
})
export class ExoneradoEditComponent implements OnInit {

  public idemp : string | null = null;
  public exonerado : IDatos = {} as IDatos;

  constructor(
    private _vacacionesService : VacacionesService,
    private activateRouter : ActivatedRoute,
    private router : Router,
    
  ) { }

  ngOnInit(): void {
    this.obtenerExonerado();
  }

  obtenerExonerado(){
    this.activateRouter.paramMap.subscribe((param: ParamMap) => {
      this.idemp = param.get('idemp')
      
    })

    if(this.idemp){
      this._vacacionesService.readExonerado(this.idemp).subscribe((response : IDatos | any) => {        
        this.exonerado = response.data
      })
    }

  }

  public actualizarExonerado(){{
    if(this.idemp){
      this._vacacionesService.update(this.idemp, this.exonerado).subscribe((response) => {
        this.router.navigate(['/']).then();
      }, (error) => {
        alert(error.error.message);
        
        
      })
    }
  }}

}
