export interface RespFechasVencidas {
    data:  FechasVencidas[];
    pages: number;
}

export interface FechasVencidas {
    imgConductor:       string;
    id:                 number;
    nombre:             string;
    empresa:            string;
    cedula:             string;
    placa:              string;
    licenciaConduccion: string;
    tarjetaOperacion:   string;
    rcc:                string;
    rce:                string;
    soat:               string;
    tecnicoMecanica:    string;
}

export interface RespFechasVencidasEmpresas {
    data:  FechasVencidasEmpresa[];
    pages: number;
}


export interface FechasVencidasEmpresa {
    cedula:                             string;
    nombres:                            string;
    apellidos:                          string;
    fotoURL:                            string;
    razonSocial:                        string;
    diferencialicencia:                 string;
    fechaLicenciaConduccion:            string;
    diferenciatarjetaO:                 string;
    fechaTarjetaOperacionF:             string;
    diferenciaFechaNumeroRCC:           string;
    FechaNumeroRCC:                     string;
    diferenciaFechaNumeroRCE:           string;
    FechaNumeroRCE:                     string;
    diferenciaFechaNumeroSOAT:          string;
    FechaNumeroSOAT:                    string;
    diferenciaFechaNumeroTecnomecanica: string;
    FechaNumeroTecnomecanica:           string;
    placa:                              string;
    ultima_vinculacion: {
      id: string;
    }
}
