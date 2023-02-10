import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { alumno } from "src/app/models/alumno";
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditAlumnosFormComponent } from '../edit-alumnos-form/edit-alumnos-form.component';

@Component({
  selector: 'app-table-alumnos',
  templateUrl: './table-alumnos.component.html',
  styleUrls: ['./table-alumnos.component.css']
})
export class TableAlumnosComponent {
  @Input() alumnosTable!: alumno[]
  dataSource!: MatTableDataSource<alumno>
  columnas: string[] = [ "id","nombre", "email", "estado", "acciones"];
  @ViewChild(MatTable) table!: MatTable<any>;
  @Output() eventoEditarAlumno: EventEmitter<alumno> = new EventEmitter<alumno>();

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<alumno>(this.alumnosTable);
  }

  ngDoCheck() {
    this.dataSource = new MatTableDataSource<alumno>(this.alumnosTable);
  }

  constructor(
    private dialog: MatDialog
  ) {
  }

  delete(row: any): void {
    const index = this.alumnosTable.indexOf(row, 0);
    if (index > -1) {
      this.alumnosTable.splice(index, 1);
    }
    this.table.renderRows();
  }

  abrirDialog(alumno: alumno): void {
    const dialogRef = this.dialog.open(EditAlumnosFormComponent , {
      height: '500px',
      width: '400px',
      data: alumno
    });
    dialogRef.afterClosed().subscribe( response => {
      this.eventoEditarAlumno.emit(response.data)
    })
  }

}
