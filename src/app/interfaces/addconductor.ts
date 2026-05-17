export interface GetConductorIDVinculacion {
    id:                      number;
    idVehiculo:              number;
    idConductor:             number;
    jornada:                 string;
    consecutivo:             string;
    idEmpresa:               number;
    fechaUltimaRefrendacion: Date;
    estado:                  string;
    conductor:               AddConductor;
    vehiculo:                AddVehiculo;
    empresa:                 AddEmpresa;
}

export interface AddConductor {
    id:                      number;
    cedula:                  string;
    idUsuario:               number;
    nombres:                 string;
    apellidos:               string;
    direccion:               string;
    barrio:                  string;
    telefono:                string;
    categoriaPase:           string;
    licenciaConduccion:      string;
    fechaExpedicionLicenciaConduccion: Date;
    fechaLicenciaConduccion: Date;
    tipoSangre:              string;
    rh:                      string;
    email:                   string;
    fotoURL:                 string;
    fechaNacimiento:         Date | string;
    sexo:                    string;
    comparendosVigentes:     string;
    polizaAccidentes:        string;
    estadoCivil:             string;
    parentescoJefeHogar:     string;
    numeroHijos:             string;
    personasCargo:           string;
    nivelEducativoAlcanzado: string;
    estudia:                 number;
    tipoDiscapacidad:        string;
    taxistaOcacional:        number;
    tiempoComoConductor:     string;
    otraLabor:               string;
    tiempoOtraLabor:         string;
    ingresosAproxConductor:  string;
    ingresosOtraLabor:       string;
    estratoSocioEconomico:   string;
    tipoVivienda:            string;
    luz:                     number;
    agua:                    number;
    gas:                     number;
    alcantarillado:          number;
    recoleccionBasura:       number;
    otraLaborUnidad:         string;
    conductorLaborUnidad:    number;
    idEps:                   number;
    idAfp:                   number;
    idArl:                   number;
    uuid:                    string;
    seguridad_social:        AddSeguridadSocial[];
}

export interface AddSeguridadSocial {
    id:                    number;
    codigo:                number;
    nombre:                string;
    direccion:             string;
    telefono:              string;
    estado:                string;
    tipo:                  string;
    fechaEliminacion:      string;
    fechaRegistro:         string;
    fechaModificacion:     string;
    idUsuarioRegistro:     string;
    idUsuarioModificacion: string;
    idUsuarioEliminacion:  string;
    idMigration:           string;
    pivot:                 AddPivot;
}

export interface AddPivot {
    idConductor:       number;
    idSeguridadSocial: number;
}

export interface AddEmpresa {
    id:          number;
    direccion:   string;
    email:       string;
    telefono:    string;
    nit:         string;
    razonSocial: string;
    logo:        string;
}

export interface AddVehiculo {
    id:                       number;
    placa:                    string;
    emailPropietario:         string;
    modelo:                   string;
    clase:                    string;
    capacidad:                string;
    tipoCombustible:          string;
    numeroMotor:              string;
    numeroChasis:             string;
    tarjetaOperacion:         string;
    fechaTarjetaOperacion:    Date;
    fechaTarjetaOperacionF:   Date;
    cedulaPropietario:        string;
    nombrePropietario:        string;
    telefonoPropietario:      string;
    direccionPropietario:     string;
    numeroRCC:                string;
    numeroRCE:                string;
    numeroSOAT:               string;
    fechaNumeroRCC:           Date;
    fechaNumeroRCE:           Date;
    fechaNumeroSOAT:          Date;
    fechaExpedicionNumeroSOAT:Date;
    numeroTecnoMecanica:      string;
    fechaNumeroTecnoMecanica: Date;
    fechaExpedicionNumeroTecnoMecanica:Date;
    idAseguradora:            number;
    idMarca:                  number;
    idAsociacion:             number;
    idMatricula:              number;
    marca:                    AddMarca;
    aseguradora:              AddAseguradora;
}

export interface AddAseguradora {
    id:            number;
    codigo:        string;
    nombre:        string;
    direccion:     string;
    telefono:      string;
    estado:        string;
    fechaRegistro: string;
}
export interface AddMarca {
    id:    number;
    marca: string;
}
export interface AddCrearConductor {
    cedula:                   string;
    nombres:                  string;
    apellidos:                string;
    direccion:                string;
    barrio:                   string;
    email:                    string;
    telefono:                 string;
    categoriaPase:            string;
    fechaLicenciaConduccion:  string;
    tipoSangre:               string;
    rh:                       string;
    fechaNacimiento:          string;
    sexo:                     string;
    comparendosVigentes:      undefined;
    estadoCivil:              string;
    parentescoJefeHogar:      string;
    numeroHijos:              string;
    personasCargo:            string;
    nivelEducativoAlcanzado:  string;
    estudia:                  string;
    tipoDiscapacidad:         string;
    taxistaOcacional:         string;
    tiempoComoConductor:      string;
    otraLabor:                string;
    conductorLaborUnidad:     string;
    otraLaborUnidad:          string;
    tiempoOtraLabor:          string;
    ingresosOtraLabor:        string;
    ingresosAproxConductor:   string;
    estratoSocioEconomico:    string;
    tipoVivienda:             string;
    luz:                      string;
    agua:                     string;
    gas:                      string;
    alcantarillado:           string;
    recoleccionBasura:        string;
    foto:                     File;
    idArl:                    string;
    idEps:                    string;
    idAfp:                    string;
    placa:                    string;
    idMatricula:              string;
    idMarca:                  string;
    modelo:                   string;
    clase:                    undefined;
    capacidad:                undefined;
    tipoCombustible:          string;
    numeroMotor:              string;
    numeroChasis:             string;
    tarjetaOperacion:         string;
    fechaTarjetaOperacion:    string;
    fechaTarjetaOperacionF:   string;
    cedulaPropietario:        string;
    nombrePropietario:        string;
    telefonoPropietario:      string;
    direccionPropietario:     string;
    numeroRCC:                string;
    numeroRCE:                string;
    numeroSOAT:               string;
    numeroTecnoMecanica:      string;
    fechaNumeroRCC:           string;
    fechaNumeroRCE:           string;
    fechaNumeroSOAT:          string;
    fechaNumeroTecnoMecanica: string;
    idAseguradora:            string;
    idAsociacion:             string;
    consecutivo:              string | undefined;
    jornada:                  string;
}
export interface Refrendaciones {
    usuario:       string;
    fechaRegistro: string;
}
export interface RespBusquedaPorCedula {
    conductor: null;
    empresas:  EmpresaBxC[];
    actual:    ConductorBxC;
}
export interface ConductorBxC {
    id:                      number;
    cedula:                  string;
    apellidos:               string;
    nombres:                 string;
    direccion:               string;
    telefono:                string;
    categoriaPase:           string;
    licenciaConduccion:      string;
    barrio:                  string;
    fechaExpedicionLicenciaConduccion: Date;
    fechaLicenciaConduccion: string;
    tipoSangre:              string;
    rh:                      string;
    email:                   string;
    fotoURL:                 string;
    idCiudad:                number;
    fechaNacimiento:         string;
    idEmpresa:               number;
    idUsuario:               number;
    fechaEliminacion:        null;
    fechaRegistro:           string;
    fechaUltimaModificacion: string;
    idUsuarioModificacion:   number;
    idUsuarioEliminacion:    null;
    sexo:                    string;
    comparendosVigentes:     string;
    polizaAccidentes:        null;
    estadoCivil:             string;
    parentescoJefeHogar:     string;
    numeroHijos:             string;
    personasCargo:           string;
    nivelEducativoAlcanzado: string;
    estudia:                 number;
    tipoDiscapacidad:        string;
    taxistaOcacional:        number;
    tiempoComoConductor:     string;
    otraLabor:               string;
    tiempoOtraLabor:         string;
    ingresosAproxConductor:  string;
    ingresosOtraLabor:       string;
    estratoSocioEconomico:   string;
    tipoVivienda:            string;
    luz:                     number;
    agua:                    number;
    gas:                     number;
    alcantarillado:          number;
    recoleccionBasura:       number;
    otraLaborUnidad:         null;
    conductorLaborUnidad:    number;
    idMigration:             null;
    idEps:                   number;
    idAfp:                   number;
    idArl:                   number;
    uuid:                    string;
}
export interface EmpresaBxC {
    id:          number;
    razonSocial: string;
    placa:       string;
    cedula:      string;
    nombres:     string;
    apellidos:   string;
}
export interface RespBusquedaPorPlaca {
    vehiculo: null;
    empresas: EmpresaBxC[];
    actual:   VehiculoBxC;
}
export interface VehiculoBxC {
    id:                       number;
    placa:                    string;
    idEmpresa:                number;
    idMarca:                  number;
    emailPropietario:         null;
    idMatricula:              string;
    modelo:                   string;
    clase:                    string;
    capacidad:                string;
    tipoCombustible:          string;
    numeroMotor:              string;
    numeroChasis:             string;
    tarjetaOperacion:         string;
    fechaTarjetaOperacion:    string;
    fechaTarjetaOperacionF:   string;
    cedulaPropietario:        string;
    nombrePropietario:        string;
    telefonoPropietario:      string;
    direccionPropietario:     string;
    numeroRCC:                string;
    numeroRCE:                string;
    numeroSOAT:               string;
    numeroTecnoMecanica:      string;
    fechaNumeroRCC:           string;
    fechaNumeroRCE:           string;
    fechaNumeroSOAT:          string;
    fechaExpedicionNumeroSOAT:string;
    fechaNumeroTecnoMecanica: string;
    fechaExpedicionNumeroTecnoMecanica:string;
    idAseguradora:            number;
    idUsuario:                number;
    fechaEliminacion:         null;
    fechaRegistro:            string;
    fechaUltimaModificacion:  string;
    idUsuarioModificacion:    number;
    idUsuarioEliminacion:     null;
    idMigration:              null;
    idAsociacion:             number;
}
