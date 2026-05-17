export interface RespTaxistasSinRefrendar {
    data:  TaxistaSinRefrendar[];
    pages: number;
    last_page: number;
}

export interface TaxistaSinRefrendar {
  id: number;
    nombres:                  string;
    apellidos:                string;
    cedula:                   string;
    licenciaConduccion:       string;
    fechaRegistro:            Date;
    numeroRefrendaciones:     number;
    nombreEmpresa:            string;
    categoriaPase:            string;
    fechaUltimaRefrendaccion: Date;
    placa:                    string;
    logo:                     string;
    ultima_vinculacion      : {
      id: string;
      empresa: { razonSocial: '' },
      fechaUltimaRefrendacion: Date,
      refrendaciones_count: number,
      vehiculo: { placa: string }
    };
}
