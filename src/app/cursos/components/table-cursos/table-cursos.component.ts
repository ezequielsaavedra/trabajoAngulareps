import { Component } from '@angular/core';
import { curso } from 'src/app/models/curso';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CursosService } from '../../services/cursos.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AgregarCursosFormComponent } from '../agregar-cursos-form/agregar-cursos-form.component';
import { EditCursosFormComponent } from '../edit-cursos-form/edit-cursos-form.component';

@Component({
  selector: 'app-table-cursos',
  templateUrl: './table-cursos.component.html',
  styleUrls: ['./table-cursos.component.css']
})
export class TableCursosComponent {
  suscripcion!: Subscription;
  dataSource!: MatTableDataSource<curso>;
  columnas: string[] = ["curso", "comision", "profesor", "fecha de inicio", "fecha de finalizacion", "inscripcion", "acciones"]
  formFilter!: FormGroup;
  controles: any = {
    comision: new FormControl("")
  }
  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog
  ){
    this.formFilter = new FormGroup(this.controles);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<curso>();
    this.suscripcion = this.cursosService.obtenerCursos().subscribe((cursos: curso[]) => {
      this.dataSource.data = cursos
    })
  }

  eliminarCurso(curso: curso) {
    this.cursosService.eliminarCursos(curso)
  }

  filtrarCurso() {
    this.cursosService.filtrarCurso(this.controles.comision.value)
  }

  abrirEditarCurso(curso: curso): void {
    const dialogRef = this.dialog.open(EditCursosFormComponent, {
      height: '500px',
      width: '500px',
      data: curso
    })
  }

  abrirAgregar(): void {
    const dialogRef = this.dialog.open(AgregarCursosFormComponent, {
      height: '450px',
      width: '400px'
    })
  }
}