import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { TableCursosComponent } from './components/table-cursos/table-cursos.component';
import { CursosRoutingModule } from './cursos-routing';
import { CursosService } from './services/cursos.service';
import { EditCursosFormComponent } from './components/edit-cursos-form/edit-cursos-form.component';
import { AgregarCursosFormComponent } from './components/agregar-cursos-form/agregar-cursos-form.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BooleanTextPipe } from './pipes/boolean-text.pipe';
import { NombreProfesoresPipe } from './pipes/nombre-profesores.pipe';

@NgModule({
  declarations: [
    TableCursosComponent,
    EditCursosFormComponent,
    AgregarCursosFormComponent,
    BooleanTextPipe,
    NombreProfesoresPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    CursosRoutingModule
  ],
  providers: [
    CursosService,
    {provide: MAT_DATE_LOCALE, useValue: "arg-ARG"}
  ]
})
export class CursosModule { }
