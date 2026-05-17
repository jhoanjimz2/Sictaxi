export interface TaxiRCCVencida {
  fechaNumeroRCC          : Date;
  marca                   : {marca: string;};
  modelo                  : string;
  numeroRCC               : string;
  placa                   : string;
  ultima_vinculacion      : { empresa: { razonSocial: '' } };
}
