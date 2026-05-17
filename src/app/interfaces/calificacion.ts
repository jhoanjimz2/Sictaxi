export interface Calificacion {
    id:            number;
    nombre:        string;
    fechaRegistro: Date;
    email:         string;
    telefono:      string;
    comentarios:   ComentarioQueja[];
}

export interface ComentarioQueja {
    comentario: string;
    pivot:      Pivot;
}

export interface Pivot {
    idcalificacion: number;
    idcomentario:   number;
}
