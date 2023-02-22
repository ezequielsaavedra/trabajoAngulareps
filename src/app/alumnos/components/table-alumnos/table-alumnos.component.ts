import { Component} from '@angular/core';
import { alumno } from "src/app/models/alumno";
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditAlumnosFormComponent } from '../edit-alumnos-form/edit-alumnos-form.component';
import { Subscription } from 'rxjs';
import { AlumnosService } from '../../services/alumnos.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormAgregarAlumnosComponent } from '../form-agregar-alumnos/form-agregar-alumnos.component';

@Component({
  selector: 'app-table-alumnos',
  templateUrl: './table-alumnos.component.html',
  styleUrls: ['./table-alumnos.component.css']
})
export class TableAlumnosComponent {
  suscripcion!: Subscription;
  dataSource!: MatTableDataSource<alumno>;
  columnas: string[] = ["id", "nombre", "email", "estado", "acciones"];
  formFilter!: FormGroup;
  controles: any = {
    nombre: new FormControl("")
  }

  constructor(
    private alumnosService: AlumnosService,
    private dialog: MatDialog
  ) {
    this.formFilter = new FormGroup(this.controles)
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<alumno>();
    this.suscripcion = this.alumnosService.obtenerAlumnos().subscribe((alumnos: alumno[]) => {
      this.dataSource.data = alumnos
    })
  }

  eliminarAlumno(alumno: alumno) {
    this.alumnosService.eliminarAlumnos(alumno)
  }

  filtrarAlumno() {
    this.alumnosService.filtrarAlumno(this.controles.nombre.value)
  }

  abrirEditar(alumno: alumno): void {
    const dialogRef = this.dialog.open(EditAlumnosFormComponent, {
      height: '500px',
      width: '400px',
      data: alumno
    });
  }

  abrirAgregar(): void {
    const dialogRef = this.dialog.open(FormAgregarAlumnosComponent, {
      height: '500px',
      width: '400px',
    });
  }
}

