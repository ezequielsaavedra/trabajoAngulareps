import { Component } from '@angular/core';
import { curso } from 'src/app/models/curso';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { CursosService } from '../../services/cursos.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AgregarCursosFormComponent } from '../agregar-cursos-form/agregar-cursos-form.component';
import { EditCursosFormComponent } from '../edit-cursos-form/edit-cursos-form.component';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';

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
  controles: any = {
    nombre: new FormControl("")
  }
  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog,
    private sesion: SesionService
  ){
    this.formFilter = new FormGroup(this.controles);
  }

  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesion();
    this.dataSource = new MatTableDataSource<curso>();
    this.suscripcion = this.cursosService.obtenerCursos().subscribe((cursos: curso[]) => {
      this.dataSource.data = cursos
    })
  }

  eliminarCurso(curso: curso) {
    this.cursosService.eliminarCursos(curso).subscribe((curso: curso) => {
      this.suscripcion = this.cursosService.obtenerCursos().subscribe((cursos: curso[]) => {
        this.dataSource.data = cursos
      })
    })
  }

  // filtrarCurso() {
  //   this.cursosService.filtrarCurso(this.controles.nombre.value).subscribe((curso: curso) => {
  //     this.suscripcion = this.cursosService.obtenerCursos().subscribe((cursos: curso[]) => {
  //       this.dataSource.data = cursos
  //     })
  //   })
  // }

  abrirEditarCurso(curso: curso): void {
    let dialogRef = this.dialog.open(EditCursosFormComponent, {
      height: '500px',
      width: '500px',
      data: curso
    })
    dialogRef.afterClosed().subscribe(cursos => {
      this.suscripcion = this.cursosService.obtenerCursos().subscribe((cursos: curso[]) => {
        this.dataSource.data = cursos
      })
    })
  }

  abrirAgregar(): void {
    let dialogRef = this.dialog.open(AgregarCursosFormComponent, {
      height: '450px',
      width: '400px'
    })
    dialogRef.afterClosed().subscribe(cursos => {
      this.suscripcion = this.cursosService.obtenerCursos().subscribe((cursos: curso[]) => {
        this.dataSource.data = cursos
      })
    })
  }
}