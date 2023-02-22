import { Component } from '@angular/core';
import { curso } from 'src/app/models/curso';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-table-cursos',
  templateUrl: './table-cursos.component.html',
  styleUrls: ['./table-cursos.component.css']
})
export class TableCursosComponent {
  suscripcion!: Subscription;
  dataSource!: MatTableDataSource<curso>;
  columnas: string[] = ["nombre", "profesor", "comision", "fecha de inicio", "fecha de finalizacion", "inscripcion", "acciones"]

  constructor(
    private cursosService: CursosService
  ){

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<curso>();
    this.suscripcion = this.cursosService.obtenerCursos().subscribe((cursos: curso[]) => {
      this.dataSource.data = cursos
    })
  }
}