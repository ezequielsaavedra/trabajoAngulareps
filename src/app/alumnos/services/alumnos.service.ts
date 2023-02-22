import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { alumno } from 'src/app/models/alumno';

@Injectable()
export class AlumnosService {

  public id: number = 0
  private alumnos: alumno[] = [
    { nombre: "agustin", apellido: "toponi", email: "atoponi@gmail.com", estado: true, id: this.id++ },
    { nombre: "nicolas", apellido: "lopez", email: "nlopez@gmail.com", estado: true, id: this.id++ },
    { nombre: "andres", apellido: "orellana", email: "aorellana@gmail.com", estado: false, id: this.id++ },
    { nombre: "julian", apellido: "corbera", email: "jcorbera@gmail.com", estado: false, id: this.id++ }
  ];
  private alumnosFiltro!: alumno[];
  private alumnos$!: BehaviorSubject<alumno[]>;

  constructor() {
  }

  obtenerAlumnos(): Observable<alumno[]> {
    this.alumnos$ = new BehaviorSubject<alumno[]>(this.alumnos);
    return this.alumnos$.asObservable();
  }

  agregarAlumno(alumno: alumno) {
    this.alumnos.push(alumno);
    this.alumnos$.next(this.alumnos);
  }

  eliminarAlumnos(alumno: alumno) {
    let indice = this.alumnos.findIndex((a: alumno) => a.id === alumno.id)
    if (indice > -1) {
      this.alumnos.splice(indice, 1);
      this.alumnos$.next(this.alumnos);
    }
  }

  editarAlumno(alumno: alumno) {
    let indice = this.alumnos.findIndex((a: alumno) => a.id === alumno.id)
    if (indice > -1) {
      this.alumnos[indice] = alumno;
      this.alumnos$.next(this.alumnos)
    }
  }

  filtrarAlumno(form: string): any {
    of(this.alumnos).pipe(
      map((alumnos: alumno[]) => {
        return alumnos.filter((alumnos: alumno) => alumnos.nombre.includes(form.toLocaleLowerCase()) || alumnos.apellido.includes(form.toLocaleLowerCase())) 
      })
    ).subscribe((alumnos) => {
      this.alumnosFiltro = alumnos
      return this.alumnos$.next(this.alumnosFiltro)
    })
  }
}
