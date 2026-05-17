export interface RespTaxisSoatVencido {
    data:  TaxiSoatVencido[];
    pages: number;
    last_page: number;
}

export interface TaxiSoatVencido {
    id:                   number;
    placa:                string;
    modelo:               string;
    numeroSOAT:           string;
    fechaNumeroSOAT: Date;
    marca                   : {marca: string;};
    ultima_vinculacion      : { empresa: { razonSocial: '' } };
}
