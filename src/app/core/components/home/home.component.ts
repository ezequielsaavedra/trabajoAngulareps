import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  sesion$!: Observable<Sesion>;
  
  constructor(
    private router: Router,
    private sesion: SesionService
  ){}

  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesion();
  }

  login(){
    this.router.navigate(['login/iniciar-sesion']);
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
