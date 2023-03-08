export interface curso {
    id: string,
    nombreCurso: string,
    profesor: string;
    comision: number;
    estadoInscripcion: boolean;
    fechaInicio: Date;
    fechaFin: Date;
}