import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SesionGuard } from '../core/guards/sesion.guard';
import { TableCursosComponent } from './components/table-cursos/table-cursos.component';

const routes: Routes = [
    {
        path: "", canActivateChild: [SesionGuard],children: [
            { path: "listar", component: TableCursosComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursosRoutingModule { }