import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  sesion$!: BehaviorSubject<Sesion>
  sesion!: Sesion

  constructor() { 
    this.sesion = {
      sesionActiva: false
    };
    this.sesion$ = new BehaviorSubject<Sesion>(this.sesion);
  }

  crearSesion(sesion: Sesion){
    this.sesion$.next(sesion);
  }

  obtenerSesion(): Observable<Sesion>{
    return this.sesion$.asObservable();
  }

  logout(sesion: Sesion){
    this.sesion$.next(sesion);
  }
}
