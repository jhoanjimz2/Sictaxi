export interface RespTaxisTarjetaOperacionVencida {
    data:  TaxiTarjetaVencida[];
    pages: number;
    last_page: number;
}

export interface TaxiTarjetaVencida {
    id:                               number;
    placa:                            string;
    modelo:                           string;
    tarjetaOperacion:           string;
    fechaTarjetaOperacionF: Date;
    marca                   : {marca: string;};
    ultima_vinculacion      : { empresa: { razonSocial: '' } };
}
