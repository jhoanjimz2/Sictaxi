export interface GetParqueAutomotor {
    data:  Vehiculo[];
    pages: number;
    last_page: number;
}
export interface Vehiculo {
    id:                   number;
    nombreEmpresa:        string;
    placa:                string;
    modelo:               string;
    nombrePropietario:    string;
    cedulaPropietario:    string;
    numeroMotor:          string;
    numeroChasis:         string;
    telefonoPropietario:  string;
    direccionPropietario: string;
    marca                   : {marca: string;};
    ultima_vinculacion      : { empresa: { razonSocial: '' } };
}
