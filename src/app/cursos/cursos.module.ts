import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCursosComponent } from './components/table-cursos/table-cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosService } from './services/cursos.service';
import { EditCursosFormComponent } from './components/edit-cursos-form/edit-cursos-form.component';
import { AgregarCursosFormComponent } from './components/agregar-cursos-form/agregar-cursos-form.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { cursoStateFeatureKey, reducer } from './state/curso-state.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CursosEffects } from './state/curso-state.effects';

@NgModule({
  declarations: [
    TableCursosComponent,
    EditCursosFormComponent,
    AgregarCursosFormComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    StoreModule.forFeature(cursoStateFeatureKey, reducer),
    EffectsModule.forFeature([CursosEffects])
  ],
  providers: [
    CursosService,
    {provide: MAT_DATE_LOCALE, useValue: "arg-ARG"}
  ]
})
export class CursosModule { }
