export interface RespDesvinculaciones {
  message: string;
  data:    DataDesvinculaciones;
}

export interface DataDesvinculaciones {
  current_page:   number;
  data:           DataDesvinculacion[];
  first_page_url: string;
  from:           number;
  last_page:      number;
  last_page_url:  string;
  links:          Link[];
  next_page_url:  string;
  path:           string;
  per_page:       number;
  prev_page_url:  null;
  to:             number;
  total:          number;
}

export interface DataDesvinculacion {
  id:                      number;
  idVehiculo:              number;
  idConductor:             number;
  jornada:                 string;
  consecutivo:             string;
  idEmpresa:               number;
  idUsuario:               number;
  idUsuarioModificacion:   number;
  idUsuarioEliminacion:    number;
  fechaRegistro:           Date;
  fechaUltimaModificacion: Date;
  fechaEliminacion:        Date;
  fechaDesvinculacion:     null;
  estado:                  string;
  fechaUltimaRefrendacion: Date;
  idMigration:             null;
  vehiculo:                Vehiculo;
  conductor:               Conductor;
}

export interface Conductor {
  id:                                number;
  cedula:                            string;
  apellidos:                         string;
  nombres:                           string;
  direccion:                         string;
  telefono:                          string;
  categoriaPase:                     string;
  licenciaConduccion:                string;
  barrio:                            string;
  fechaLicenciaConduccion:           Date;
  tipoSangre:                        string;
  rh:                                string;
  email:                             string;
  fotoURL:                           string;
  idCiudad:                          number;
  fechaNacimiento:                   Date;
  idEmpresa:                         number;
  idUsuario:                         number;
  fechaEliminacion:                  null;
  fechaRegistro:                     Date;
  fechaUltimaModificacion:           Date;
  idUsuarioModificacion:             number;
  idUsuarioEliminacion:              null;
  sexo:                              string;
  comparendosVigentes:               string;
  polizaAccidentes:                  null;
  estadoCivil:                       string;
  parentescoJefeHogar:               string;
  numeroHijos:                       string;
  personasCargo:                     string;
  nivelEducativoAlcanzado:           string;
  estudia:                           number;
  tipoDiscapacidad:                  string;
  taxistaOcacional:                  number;
  tiempoComoConductor:               string;
  otraLabor:                         string;
  tiempoOtraLabor:                   string;
  ingresosAproxConductor:            string;
  ingresosOtraLabor:                 string;
  estratoSocioEconomico:             string;
  tipoVivienda:                      string;
  luz:                               number;
  agua:                              number;
  gas:                               number;
  alcantarillado:                    number;
  recoleccionBasura:                 number;
  otraLaborUnidad:                   number | null;
  conductorLaborUnidad:              number;
  idMigration:                       null;
  otp_code:                          null | string;
  telefono_verified:                 number;
  fechaExpedicionLicenciaConduccion: null;
  idEps:                             number;
  idAfp:                             number;
  idArl:                             number;
  uuid:                              string;
}

export interface Vehiculo {
  id:                                 number;
  placa:                              string;
  idEmpresa:                          number;
  idMarca:                            number;
  emailPropietario:                   null;
  idMatricula:                        string;
  modelo:                             string;
  clase:                              string;
  capacidad:                          string;
  tipoCombustible:                    string;
  numeroMotor:                        string;
  numeroChasis:                       string;
  tarjetaOperacion:                   string;
  fechaTarjetaOperacion:              Date;
  fechaTarjetaOperacionF:             Date;
  cedulaPropietario:                  string;
  nombrePropietario:                  string;
  telefonoPropietario:                string;
  direccionPropietario:               string;
  numeroRCC:                          string;
  numeroRCE:                          string;
  numeroSOAT:                         string;
  numeroTecnoMecanica:                string;
  fechaNumeroRCC:                     Date;
  fechaNumeroRCE:                     Date;
  fechaNumeroSOAT:                    Date;
  fechaNumeroTecnoMecanica:           Date;
  idAseguradora:                      number;
  idUsuario:                          number;
  fechaEliminacion:                   null;
  fechaRegistro:                      Date;
  fechaUltimaModificacion:            Date;
  idUsuarioModificacion:              number;
  idUsuarioEliminacion:               null;
  idMigration:                        null;
  fechaExpedicionNumeroSOAT:          null;
  fechaExpedicionNumeroTecnoMecanica: null;
  idAsociacion:                       number;
}

export interface Link {
  url:    null | string;
  label:  string;
  active: boolean;
}
