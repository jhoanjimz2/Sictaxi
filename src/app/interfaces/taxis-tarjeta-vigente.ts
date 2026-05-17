export interface RespTaxisTarjetaOperacionVigente {
    data:  TaxiTarjetaVigente[];
    pages: number;
}

export interface TaxiTarjetaVigente {
    id:                               number;
    nombreEmpresa:                    string;
    placa:                            string;
    modelo:                           string;
    marca:                            string;
    numeroTarjetaOperacion:           string;
    fechaVencimientoTarjetaOperacion: Date;
}
