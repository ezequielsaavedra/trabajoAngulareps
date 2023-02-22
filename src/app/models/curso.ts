import { profesor } from "./profesor";

export interface curso {
    profesor: profesor;
    comision: number;
    estadoInscripcion: boolean;
    fechaInicio: Date;
    fechaFin: Date;
}