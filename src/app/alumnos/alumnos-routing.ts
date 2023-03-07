import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableAlumnosComponent } from './components/table-alumnos/table-alumnos.component';

const routes: Routes = [
    {
        path: "", children: [
            { path: "listar", component: TableAlumnosComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlumnosRoutingModule { }