export interface Cards {
  alertasDeVencimiento             : number;
  asociaciones                     : number;
  empresasAutorizadas              : number;
  taxisConLicenciaVencida          : number;
  taxisConRCCVencido               : number;
  taxisConRCEVencido               : number;
  taxisConSoatVencido              : number;
  taxisConTarjetaDeOperacionVencida: number;
  taxisConTarjetaDeOperacionVigente: number;
  taxisConTecnomecanicaVencida     : number;
  taxisRegistrados                 : number;
  taxistasRegistrados              : number;
  taxistasSinRefrendar             : number;
  vehiculoChatarrizados            : number;
}
export interface CardsEmpresa {
  taxisRegistrados:      number;
  taxistasRegistrados:   number;
  documentosVencidos:    number;
  alertasDeVencimiento:  number;
  vehiculoChatarrizados: number;
}
export interface CardsMetricas {
  titulo: string;
  subtitulo: string;
  total: number;
  porcentaje: number
}
