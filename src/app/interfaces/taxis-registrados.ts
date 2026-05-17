export interface RespTaxisRegistrados {
    data:  TaxiRegistrado[];
    pages: number;
    last_page: number;
}

export interface TaxiRegistrado {
    id:                string;
    nombreEmpresa:     string;
    placa:             string;
    modelo:            string;
    nombrePropietario: string;
    cedulaPropietario: string;
    marca                   : {marca: string;};
    ultima_vinculacion      : { empresa: { razonSocial: '' } };
}
