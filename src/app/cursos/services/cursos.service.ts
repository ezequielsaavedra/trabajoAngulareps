import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
  private cursosFirltro!: BehaviorSubject<curso[]>;

  constructor() {

  }

  obtenerCursos(): Observable<curso[]> {
    this.cursos$ = new BehaviorSubject<curso[]>(this.cursos)
    return this.cursos$.asObservable();
  }
}
