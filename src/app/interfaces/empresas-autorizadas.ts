export interface RespEmpresasAutorizadas {
    data:  EmpresaAutorizada[];
    pages: number;
}
export interface EmpresaAutorizada {
    nombreEmpresa: string;
    nit:           string;
    direccion:     string;
    telefono:      string;
    email:         string;
    logo:          string;
    id:            number;
}
export interface RespEmpresaAutorizada {
    id:                              number;
    direccion:                       string;
    email:                           string;
    telefono:                        string;
    nit:                             string;
    nombreRepresentante:             string;
    direccionRepresentante:          string;
    telefonoRepresentante:           string;
    razonSocial:                     string;
    logo:                            string;
    firma:                           null;
    fechaEliminacion:                null;
    fechaRegistro:                   Date;
    fechaModificacion:               null;
    idUsuarioRegistro:               null;
    idUsuarioModificacion:           null;
    idUsuarioEliminacion:            null;
    idCiudad:                        null;
    tipoEmpresa:                     null;
    sigla:                           null;
    idCiudadPrincipal:               null;
    celular:                         null;
    cedulaRepresentante:             null;
    tipoIdentificacionRepresentante: null;
    idCiudadCedulaRepresentante:     null;
    tipoActoAdministrativo:          null;
    numeroActoAdministrativo:        null;
    fechaHabilitacion:               null;
    fechaInicioHabilitacion:         null;
    fechaFinHabilitacion:            null;
    radioAccion:                     null;
    modalidad:                       null;
    capacidadVinculada:              null;
    rolEmpresa:                      string;
    idMigration:                     string;
}
export interface GuardarEmpresa {
    direccion:           string;
    id:                  number | null;
    email:               string;
    nit:                 string;
    nombreRepresentante: string;
    razonSocial:         string;
    telefono:            string;
}