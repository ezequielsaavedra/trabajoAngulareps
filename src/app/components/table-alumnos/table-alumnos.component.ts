import { Component } from '@angular/core';
import { alumno } from "src/app/models/alumno";
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditAlumnosFormComponent } from '../edit-alumnos-form/edit-alumnos-form.component';

@Component({
  selector: 'app-table-alumnos',
  templateUrl: './table-alumnos.component.html',
  styleUrls: ['./table-alumnos.component.css']
})
export class TableAlumnosComponent {
  alumnos: alumno[] = [
    { nombre: "Agustin", apellido: "Toponi", email: "atoponi@gmail.com", estado: true },
    { nombre: "Nicolas", apellido: "Lopez", email: "nlopez@gmail.com", estado: true },
    { nombre: "Andres", apellido: "Orellana", email: "aorellana@gmail.com", estado: false },
    { nombre: "Julian", apellido: "Corbera", email: "jcorbera@gmail.com", estado: false }
  ];
  dataSource: MatTableDataSource<alumno> = new MatTableDataSource<alumno>(this.alumnos);
  columnas: string[] = ["nombre", "email", "estado", "acciones"];

  constructor(
    private dialog: MatDialog
  ) {

  }

  abrirDialog(alumno: alumno) {
    const dialogRef = this.dialog.open(EditAlumnosFormComponent, {
      height: '500px',
      width: '400px',
      data: alumno
    });    
  }
}