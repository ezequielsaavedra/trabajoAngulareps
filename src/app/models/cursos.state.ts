import { curso } from "./curso";

export interface CursoState {
    cargando: boolean;
    cursos: curso[];
}