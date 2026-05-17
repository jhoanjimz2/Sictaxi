export interface RespTaxistasRegistrados {
    data:  TaxistaRegistrado[];
    pages: number;
    last_page: number;
}

export interface TaxistaRegistrado {
    id:              number;
    nombres:                  string;
    apellidos:                string;
    cedula:                   string;
    licenciaConduccion:       string;
    direccion:                string;
    categoriaPase:            string;
    nombreEmpresa:            string;
    fechaUltimaRefrendaccion: Date;
    placa:                    string;
    logo:                     string;
    ultima_vinculacion: {
      id: string;
      empresa: { razonSocial: '' }
    }
}
