import { Component } from '@angular/core';
import { alumno } from "src/app/models/alumno";
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditAlumnosFormComponent } from '../edit-alumnos-form/edit-alumnos-form.component';
import { Observable, Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { FormAgregarAlumnosComponent } from '../form-agregar-alumnos/form-agregar-alumnos.component';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/models/sesion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { selectAlumnosCargados, selectCargandoAlumnos } from '../../state/alumnos-state.selectors';
import { cargarAlumnosStates, eliminarAlumno } from '../../state/alumnos-state.actions';
import { AlumnoState } from 'src/app/models/alumnos.state';

@Component({
  selector: 'app-table-alumnos',
  templateUrl: './table-alumnos.component.html',
  styleUrls: ['./table-alumnos.component.css']
})
export class TableAlumnosComponent {
  suscripcion!: Subscription;
  sesion$!: Observable<Sesion>;
  dataSource!: MatTableDataSource<alumno>;
  columnas: string[] = ["id", "nombre", "email", "estado", "acciones"];
  formFilter!: FormGroup;
  cargando$!: Observable<boolean>
  controles: any = {
    nombre: new FormControl("")
  }

  constructor(
    private dialog: MatDialog,
    private sesion: SesionService,
    private store: Store<AlumnoState>,
    private snackBar: MatSnackBar
  ) {
    this.formFilter = new FormGroup(this.controles)
  }

  ngOnInit(): void {
    this.cargando$ = this.store.select(selectCargandoAlumnos);
    this.store.dispatch(cargarAlumnosStates());
    this.sesion$ = this.sesion.obtenerSesion();
    this.dataSource = new MatTableDataSource<alumno>();
    this.suscripcion = this.store.select(selectAlumnosCargados).subscribe((alumnos: alumno[]) => {
      this.dataSource.data = alumnos
    })
  }

  eliminarAlumno(alumno: alumno) {
    this.snackBar.open(`${alumno.apellido} ${alumno.nombre} eliminado satisfactoriamente`);
    this.store.dispatch(eliminarAlumno({ alumno }));
  }

  abrirEditar(alumno: alumno): void {
    let dialogRef = this.dialog.open(EditAlumnosFormComponent, {
      height: '500px',
      width: '400px',
      data: alumno
    });
    dialogRef.afterClosed().subscribe(alumno => {
      this.snackBar.open(`${alumno.apellido} ${alumno.nombre} editado satisfactoriamente`)
      this.suscripcion = this.store.select(selectAlumnosCargados).subscribe((alumno: alumno[]) => {
        this.dataSource.data = alumno
      })
    })
  }

  abrirAgregar(): void {
    let dialogRef = this.dialog.open(FormAgregarAlumnosComponent, {
      height: '500px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(alumno => {
      this.suscripcion = this.store.select(selectAlumnosCargados).subscribe((alumno: alumno[]) => {
        this.dataSource.data = alumno
      })
    })
  }
}


