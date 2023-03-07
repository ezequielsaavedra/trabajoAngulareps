import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { SesionGuard } from './core/guards/sesion.guard';

const routes: Routes = [

  { path: "inicio", component: HomeComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: "cursos", loadChildren: () => import("./cursos/cursos.module").then((modulo) => modulo.CursosModule), canLoad: [SesionGuard] },
  { path: "alumnos", loadChildren: () => import("./alumnos/alumnos.module").then((modulo) => modulo.AlumnosModule), canLoad: [SesionGuard] },
  { path: "login", loadChildren: () => import("./login/login.module").then((modulo) => modulo.LoginModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
