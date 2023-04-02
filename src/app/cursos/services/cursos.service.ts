import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { curso } from 'src/app/models/curso';
import { env } from 'src/enviroment/enviroment';

@Injectable()
export class CursosService {

  constructor(
    private http: HttpClient
  ) {
  }

  obtenerCursos(): Observable<curso[]> {
    return this.http.get<curso[]>(`${env.apiURL}/cursos`)
  }

  agregarCurso(curso: curso): Observable<curso> {
    return this.http.post<curso>(`${env.apiURL}/cursos`, curso)
  }

  eliminarCursos(curso: curso): Observable<curso>{
    return this.http.delete<curso>(`${env.apiURL}/cursos/${curso.id}`)
  }

  editarCurso(curso: curso): Observable<curso> {
    return this.http.put<curso>(`${env.apiURL}/cursos/${curso.id}`, curso)
  }
}
