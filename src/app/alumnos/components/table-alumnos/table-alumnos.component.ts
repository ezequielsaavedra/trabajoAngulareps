import { Component } from '@angular/core';
import { alumno } from "src/app/models/alumno";
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditAlumnosFormComponent } from '../edit-alumnos-form/edit-alumnos-form.component';
import { Observable, Subscription } from 'rxjs';
import { AlumnosService } from '../../services/alumnos.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormAgregarAlumnosComponent } from '../form-agregar-alumnos/form-agregar-alumnos.component';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/models/sesion';

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
  controles: any = {
    nombre: new FormControl("")
  }

  constructor(
    private alumnosService: AlumnosService,
    private dialog: MatDialog,
    private sesion: SesionService
  ) {
    this.formFilter = new FormGroup(this.controles)
  }

  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesion();
    this.dataSource = new MatTableDataSource<alumno>();
    this.suscripcion = this.alumnosService.obtenerAlumnos().subscribe((alumnos: alumno[]) => {
      this.dataSource.data = alumnos
    })
  }

  eliminarAlumno(alumno: alumno) {
    this.alumnosService.eliminarAlumnos(alumno).subscribe((alumno: alumno) => {
      this.suscripcion = this.alumnosService.obtenerAlumnos().subscribe((alumnos: alumno[]) => {
        this.dataSource.data = alumnos
      })
    })
  }

  // filtrarAlumno() {
  //   this.alumnosService.filtrarAlumno(this.controles.nombre.value)
  // }

  abrirEditar(alumno: alumno): void {
    let dialogRef = this.dialog.open(EditAlumnosFormComponent, {
      height: '500px',
      width: '400px',
      data: alumno
    });
    dialogRef.afterClosed().subscribe(alumno => {
      this.suscripcion = this.alumnosService.obtenerAlumnos().subscribe((alumnos: alumno[]) => {
        this.dataSource.data = alumnos
      })
    })
  }

  abrirAgregar(): void {
    let dialogRef = this.dialog.open(FormAgregarAlumnosComponent, {
      height: '500px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(alumno => {
      this.suscripcion = this.alumnosService.obtenerAlumnos().subscribe((alumnos: alumno[]) => {
        this.dataSource.data = alumnos
      })
    })
  }
}


