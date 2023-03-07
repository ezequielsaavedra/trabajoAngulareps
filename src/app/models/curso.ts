import { profesor } from "./profesor";

export interface curso {
    nombreCurso: string,
    profesor: profesor;
    comision: number;
    estadoInscripcion: boolean;
    fechaInicio: Date;
    fechaFin: Date;
}