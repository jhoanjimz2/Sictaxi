export interface RespTaxistasSinLicencia {
    data:  TaxistaSinLicencia[];
    pages: number;
    last_page: number;
}

export interface TaxistaSinLicencia {
  id: number;
    nombres:                            string;
    apellidos:                          string;
    cedula:                             string;
    licenciaConduccion:                 string;
    licenciaConduccionFechaVencimiento: Date;
    fechaLicenciaConduccion: Date;
    categoriaPase:                      string;
    nombreEmpresa:                      string;
    placa:                              string;
    fechaUltimaRefrendaccion:           Date;
    logo:                               string;
    ultima_vinculacion: {
      id: string;
      empresa: { razonSocial: '' }
    }
}
