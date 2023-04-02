import { Component } from '@angular/core';
import { curso } from 'src/app/models/curso';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AgregarCursosFormComponent } from '../agregar-cursos-form/agregar-cursos-form.component';
import { EditCursosFormComponent } from '../edit-cursos-form/edit-cursos-form.component';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Store } from '@ngrx/store';
import { selectCargandoCursos, selectCursosCargados } from '../../state/curso-state.selectors';
import { eliminarCurso, loadCursoStates } from '../../state/curso-state.actions';
import { CursoState } from '../../state/curso-state.reducer';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table-cursos',
  templateUrl: './table-cursos.component.html',
  styleUrls: ['./table-cursos.component.css']
})
export class TableCursosComponent {
  suscripcion!: Subscription;
  sesion$!: Observable<Sesion>;
  dataSource!: MatTableDataSource<curso>;
  columnas: string[] = ["curso", "comision", "profesor", "fecha de inicio", "fecha de finalizacion", "inscripcion", "acciones"]
  formFilter!: FormGroup;
  cargando$!: Observable<boolean>
  controles: any = {
    nombre: new FormControl("")
  }

  constructor(
    private dialog: MatDialog,
    private sesion: SesionService,
    private store: Store<CursoState>,
    private snackBar: MatSnackBar
  ){
    this.formFilter = new FormGroup(this.controles);
  }

  ngOnInit(): void {
    this.cargando$ = this.store.select(selectCargandoCursos);
    this.store.dispatch(loadCursoStates());
    this.sesion$ = this.sesion.obtenerSesion();
    this.dataSource = new MatTableDataSource<curso>();
    this.suscripcion = this.store.select(selectCursosCargados).subscribe((cursos: curso[]) => {
      this.dataSource.data = cursos
    });
  }

  eliminarCurso(curso: curso) {
    this.snackBar.open(`${curso.nombreCurso} eliminado satisfactoriamente`);
    this.store.dispatch(eliminarCurso({ curso }));
  }

  abrirEditarCurso(curso: curso): void {
    let dialogRef = this.dialog.open(EditCursosFormComponent, {
      height: '500px',
      width: '500px',
      data: curso
    })
    dialogRef.afterClosed().subscribe(cursos => {
      this.snackBar.open(`${curso.nombreCurso} editado satisfactoriamente`)
      this.suscripcion = this.store.select(selectCursosCargados).subscribe((cursos: curso[]) => {
        this.dataSource.data = cursos
      })
    })
  }

  abrirAgregar(): void {
    let dialogRef = this.dialog.open(AgregarCursosFormComponent, {
      height: '450px',
      width: '400px'
    })
    dialogRef.afterClosed().subscribe(curso => {
      this.suscripcion = this.store.select(selectCursosCargados).subscribe((cursos: curso[]) => {
        this.dataSource.data = cursos
      })
    })
  }
}