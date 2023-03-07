import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAlumnosFormComponent } from './components/edit-alumnos-form/edit-alumnos-form.component';
import { FormAgregarAlumnosComponent } from './components/form-agregar-alumnos/form-agregar-alumnos.component';
import { TableAlumnosComponent } from './components/table-alumnos/table-alumnos.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosService } from './services/alumnos.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EditAlumnosFormComponent,
    FormAgregarAlumnosComponent,
    TableAlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule
  ], 
  providers: [
    AlumnosService
  ]
})
export class AlumnosModule { }
