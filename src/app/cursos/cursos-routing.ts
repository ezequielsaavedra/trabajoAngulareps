import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableCursosComponent } from './components/table-cursos/table-cursos.component';

const routes: Routes = [
    { path: "cursos", component: TableCursosComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursosRoutingModule { }