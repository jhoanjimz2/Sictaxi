export interface TaxiTecnomecanicaVencida {
  fechaNumeroTecnoMecanica: Date;
  marca                   : {marca: string;};
  modelo                  : string;
  numeroTecnoMecanica     : string;
  placa                   : string;
  ultima_vinculacion      : { empresa: { razonSocial: '' } };
}
