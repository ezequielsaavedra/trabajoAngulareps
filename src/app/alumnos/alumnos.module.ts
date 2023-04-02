import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAlumnosFormComponent } from './components/edit-alumnos-form/edit-alumnos-form.component';
import { FormAgregarAlumnosComponent } from './components/form-agregar-alumnos/form-agregar-alumnos.component';
import { TableAlumnosComponent } from './components/table-alumnos/table-alumnos.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosService } from './services/alumnos.service';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { AlumnosStateEffects } from './state/alumnos-state.effects';
import { StoreModule } from '@ngrx/store';
import { alumnosStateFeatureKey, reducer } from './state/alumnos-state.reducer';


@NgModule({
  declarations: [
    EditAlumnosFormComponent,
    FormAgregarAlumnosComponent,
    TableAlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule,
    StoreModule.forFeature(alumnosStateFeatureKey, reducer),
    EffectsModule.forFeature([AlumnosStateEffects])
  ], 
  providers: [
    AlumnosService
  ]
})
export class AlumnosModule { }
