import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { TableCursosComponent } from './components/table-cursos/table-cursos.component';
import { CrursosRoutingModule } from './cursos-routing';

@NgModule({
  declarations: [
    TableCursosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    CrursosRoutingModule
  ]
})
export class CursosModule { }
