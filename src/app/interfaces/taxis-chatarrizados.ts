export interface RespTaxisChatarrizados {
    data:  TaxiChatarrizado[];
    pages: number;
    last_page: number;
}

export interface TaxiChatarrizado {
    placa:             string;
    modelo:            string;
    nombrePropietario: string;
    cedulaPropietario: string;
    fechaEliminacion: string;
    marca                   : {marca: string;};
    ultima_vinculacion      : { empresa: { razonSocial: '' } };
    ultima_vinculacion_nullable      : { empresa: { razonSocial: '' } } | null;
}
