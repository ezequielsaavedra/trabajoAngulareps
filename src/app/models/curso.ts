import { profesor } from "./profesor";

export interface curso {
    nombre: string;
    profesor: profesor;
    comision: number;
    estadoInscripcion: boolean;
    fechaInicio: Date;
    fechaFin: Date;
}