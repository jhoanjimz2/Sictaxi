export type Action = 'EPS' | 'ARL' | 'AFP' |
                     'ASE' | 'MAR' ;

export interface LoadParametros {
    id:                    number;
    bloqueariniciosesion:  number;
    mensajebloqueo:        string;
    maximousuariosempresa: number;
    idusuario:             number;
    fecharegistro:         string;
    urlApiTest:            string;
    urlApi:                string;
    urlAppTest:            string;
    urlApp:                string;
    appProduccion:         number;
    urlPlayStore:          string;
    urlAppStore:           string;
    vehiculosXconductores: number;
}
export interface UpdateParametros {
    id: string;
    bloqueariniciosesion: string;
    mensajebloqueo: string;
    maximousuariosempresa: string;
    vehiculosXconductores: string;
}
export interface Marca {
    id: string;
    marca: string;
}
export interface LoadParametrosSelects {
    data:    Data;
    message: string;
}
export interface Data {
    EPS: Param[];
    ARL: Param[];
    AFP: Param[];
}
export interface Param {
    id:     string;
    nombre: string;
    tipo:   string;
}
export interface Aseguradora {
    id:     string;
    nombre: string;
    codigo: string;
}
export interface TipoCombustible {
    id:     string;
    nombre: string;
    codigo: string;
}
export interface Asociacion2 {
    id:          string;
    razonsocial: string;
}
