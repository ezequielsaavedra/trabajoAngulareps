import { Component } from '@angular/core';
import { curso } from 'src/app/models/curso';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-cursos',
  templateUrl: './table-cursos.component.html',
  styleUrls: ['./table-cursos.component.css']
})
export class TableCursosComponent {
  cursos: curso[] = [
    {
      nombre: "Ingles",
      profesor: {
        nombre: "Marisa",
        apellido: "Gasparri",
        email: "mgasparri@gmail.com",
      },
      comision: 2345,
      estadoInscripcion: true,
      fechaInicio: new Date(2023, 2, 6),
      fechaFin: new Date(2023, 10, 22)
    },
    {
      nombre: "Japones",
      profesor: {
        nombre: "Nezuko",
        apellido: "Kamado",
        email: "nkamado@gmail.com",
      },
      comision: 2345,
      estadoInscripcion: false,
      fechaInicio: new Date(2023, 2, 7),
      fechaFin: new Date(2023, 10, 23)
    },
    {
      nombre: "Aleman",
      profesor: {
        nombre: "Erwin",
        apellido: "Smith",
        email: "esmith@gmail.com",
      },
      comision: 2345,
      estadoInscripcion: false,
      fechaInicio: new Date(2023, 2, 6),
      fechaFin: new Date(2023, 10, 22)
    },
    {
      nombre: "Italiano",
      profesor: {
        nombre: "Laureano",
        apellido: "Colombini",
        email: "lcolombini@gmail.com",
      },
      comision: 2345,
      estadoInscripcion: true,
      fechaInicio: new Date(2023, 2, 7),
      fechaFin: new Date(2023, 10, 23)
    },
  ];

  dataSource: MatTableDataSource<curso> = new MatTableDataSource<curso>(this.cursos);
  columnas: string[] = ["nombre", "profesor", "comision", "fecha de inicio", "fecha de finalizacion", "inscripcion", "acciones"]

}