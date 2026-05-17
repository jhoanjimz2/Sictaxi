export interface ReqEstadisticaConductores {
    fechaInicial: string;
    fechaFinal  : string;
    comentarios?: string[];
}
export interface ConductorConCalificacion {
    id: number;
    name:          string;
    surname:       string;
    img:           string;
    placa:         string;
    cantidad:      number;
    ultima_vinculacion: {
      id: number;
    }
}
