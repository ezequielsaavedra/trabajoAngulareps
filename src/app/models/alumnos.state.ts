import { alumno } from "./alumno";

export interface AlumnoState {
    cargando: boolean,
    alumnos: alumno[]
}