export interface RespAsociasiones {
    data:  Asociacion[];
    pages: number;
}
export interface Asociacion {
    nombreAsociacion: string;
    nit:              string;
    direccion:        string;
    telefono:         string;
    email:            string;
    id:               number;
}
export interface RespAsociacion {
    id:                    number;
    direccion:             string;
    email:                 string;
    telefono:              string;
    nit:                   string;
    razonSocial:           string;
    fechaEliminacion:      null;
    fechaRegistro:         Date;
    fechaModificacion:     null;
    idUsuarioRegistro:     number;
    idUsuarioModificacion: null;
    idUsuarioEliminacion:  null;
}
export interface GuardarAsociacion {
    id:                  number | null;
    direccion:           string;
    email:               string;
    telefono:            string;
    nit:                 string;
    razonSocial:         string;
}