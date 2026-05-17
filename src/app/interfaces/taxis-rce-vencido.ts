export interface TaxiRCEVencida {
  fechaNumeroRCE          : Date;
  marca                   : {marca: string;};
  modelo                  : string;
  numeroRCE               : string;
  placa                   : string;
  ultima_vinculacion      : { empresa: { razonSocial: '' } };
}
