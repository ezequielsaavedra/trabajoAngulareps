import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TableCursosComponent } from './components/table-cursos/table-cursos.component';
import { TableAlumnosComponent } from './components/table-alumnos/table-alumnos.component';
import { MainComponent } from './components/main/main.component';
import { EditAlumnosFormComponent } from './components/edit-alumnos-form/edit-alumnos-form.component';
import { NombreAlumnosPipe } from './pipes/nombre-alumnos.pipe';
import { BooleanTextPipe } from './pipes/boolean-text.pipe';
import { TitulosDirective } from './directives/titulos.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableCursosComponent,
    TableAlumnosComponent,
    MainComponent,
    EditAlumnosFormComponent,
    NombreAlumnosPipe,
    BooleanTextPipe,
    TitulosDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

