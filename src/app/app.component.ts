import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from './core/services/sesion.service';
import { Sesion } from './models/sesion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trabajo-angular';
  sesion$!: Observable<Sesion>;

  constructor(
    private router: Router,
    private sesion: SesionService
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesion();
  }

  logout() {
    let sesionLogout: Sesion = {
      sesionActiva: false,
      usuarioActivo: undefined
    }
    this.sesion.logout(sesionLogout);
    this.router.navigate(['login/iniciar-sesion']);
  }
}
