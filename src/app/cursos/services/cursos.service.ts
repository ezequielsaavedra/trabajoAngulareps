import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { curso } from 'src/app/models/curso';

@Injectable()
export class CursosService {
  cursos: curso[] = [
    {
      profesor: {
        nombre: "agen",
        apellido: "kolar",
        email: "akolar@gmail.com",
      },
      comision: 2345,
      estadoInscripcion: true,
      fechaInicio: new Date(2023, 2, 6),
      fechaFin: new Date(2023, 10, 22)
    },
    {
      profesor: {
        nombre: "max",
        apellido: "rebo",
        email: "mrebo@gmail.com",
      },
      comision: 2345,
      estadoInscripcion: false,
      fechaInicio: new Date(2023, 2, 7),
      fechaFin: new Date(2023, 10, 23)
    },
    {
      profesor: {
        nombre: "siri",
        apellido: "tachi",
        email: "stachi@gmail.com",
      },
      comision: 2345,
      estadoInscripcion: false,
      fechaInicio: new Date(2023, 2, 6),
      fechaFin: new Date(2023, 10, 22)
    },
    {
      profesor: {
        nombre: "ben",
        apellido: "quadinaros",
        email: "bquadinaros@gmail.com",
      },
      comision: 2345,
      estadoInscripcion: true,
      fechaInicio: new Date(2023, 2, 7),
      fechaFin: new Date(2023, 10, 23)
    },
  ];
  private cursos$!: BehaviorSubject<curso[]>;
  private cursosFiltro!: curso[];

  constructor() {
  }

  obtenerCursos(): Observable<curso[]> {
    this.cursos$ = new BehaviorSubject<curso[]>(this.cursos)
    return this.cursos$.asObservable();
  }

  agregarCurso(curso: curso) {
    this.cursos.push(curso);
    this.cursos$.next(this.cursos);
  }

  eliminarCursos(curso: curso){
    let indice = this.cursos.findIndex((c: curso) => c.comision === curso.comision)
    if (indice > -1) {
      this.cursos.splice(indice, 1);
      this.cursos$.next(this.cursos);
    }
  }

  editarCurso(curso: curso) {
    let indice = this.cursos.findIndex((c: curso) => c.comision === curso.comision)
    if (indice > -1) {
      this.cursos[indice] = curso;
      this.cursos$.next(this.cursos);
    }
  }

  filtrarCurso(form: number): any {
    of(this.cursos).pipe(
      map((cursos : curso[]) => {
        return cursos.filter((cursos: curso) => cursos.comision == form)
      })
    ).subscribe((cursos) => {
      this.cursosFiltro = cursos
      return this.cursos$.next(this.cursosFiltro)
    })
  }
}
