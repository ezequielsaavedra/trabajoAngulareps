import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { EditAlumnosFormComponent } from './components/edit-alumnos-form/edit-alumnos-form.component';
import { FormAgregarAlumnosComponent } from './components/form-agregar-alumnos/form-agregar-alumnos.component';
import { TableAlumnosComponent } from './components/table-alumnos/table-alumnos.component';
import { NombreAlumnosPipe } from './pipes/nombre-alumnos.pipe';
import { BooleanTextPipe } from './pipes/boolean-text.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosRoutingModule } from './alumnos-routing';
import { AlumnosService } from './services/alumnos.service';



@NgModule({
  declarations: [
    EditAlumnosFormComponent,
    FormAgregarAlumnosComponent,
    TableAlumnosComponent,
    NombreAlumnosPipe,
    BooleanTextPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AlumnosRoutingModule
  ], 
  providers: [
    AlumnosService
  ]
})
export class AlumnosModule { }
