import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoneradoCreateComponent } from './components/exonerado-create/exonerado-create.component';
import { ExoneradoEditComponent } from './components/exonerado-edit/exonerado-edit.component';
import { ExoneradoListComponent } from './components/exonerado-list/exonerado-list.component';



const routes: Routes = [
  {path: '', redirectTo: 'exonerado/inicio', pathMatch: 'full'},
  {path: 'exonerado/inicio', component: ExoneradoListComponent},
  {path: 'exonerado/agregar', component: ExoneradoCreateComponent},
  {path: 'exonerado/editar/:idemp', component: ExoneradoEditComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
