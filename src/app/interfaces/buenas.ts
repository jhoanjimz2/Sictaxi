export interface BuenasCalificaciones {
    id:            number;
    nombre:        string;
    fechaRegistro: Date;
    email:         string;
    telefono:      string;
    comentarios:   Comentario[];
}

export interface Comentario {
    comentario: string;
    pivot:      Pivot;
}

export interface Pivot {
    idcalificacion: number;
    idcomentario:   number;
}
