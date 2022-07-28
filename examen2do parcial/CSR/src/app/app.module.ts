import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExoneradoCreateComponent } from './components/exonerado-create/exonerado-create.component';
import { ExoneradoListComponent } from './components/exonerado-list/exonerado-list.component';
import { ExoneradoEditComponent } from './components/exonerado-edit/exonerado-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ExoneradoCreateComponent,
    ExoneradoListComponent,
    ExoneradoEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
