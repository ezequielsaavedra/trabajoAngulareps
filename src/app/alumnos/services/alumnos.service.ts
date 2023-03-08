import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { alumno } from 'src/app/models/alumno';
import { env } from 'src/enviroment/enviroment';

@Injectable()
export class AlumnosService {

  constructor(
    private http: HttpClient
  ) {
  }

  obtenerAlumnos(): Observable<alumno[]> {
    return this.http.get<alumno[]>(`${env.apiURL}/alumno`)
  }

  agregarAlumno(alumno: alumno): Observable<alumno> {
    return this.http.post<alumno>(`${env.apiURL}/alumno`, alumno)
  }

  eliminarAlumnos(alumno: alumno): Observable<alumno> {
    return this.http.delete<alumno>(`${env.apiURL}/alumno/${alumno.id}`)
  }

  editarAlumno(alumno: alumno): Observable<alumno> {
    return this.http.put<alumno>(`${env.apiURL}/alumno/${alumno.id}`, alumno)
  }

  // filtrarAlumno(form: string): any {
  //   of(this.alumnos).pipe(
  //     map((alumnos: alumno[]) => {
  //       return alumnos.filter((alumnos: alumno) => alumnos.nombre.includes(form.toLocaleLowerCase()) || alumnos.apellido.includes(form.toLocaleLowerCase())) 
  //     })
  //   ).subscribe((alumnos) => {
  //     this.alumnosFiltro = alumnos
  //     return this.alumnos$.next(this.alumnosFiltro)
  //   })
  // }
}
