import { Routes } from "@angular/router";

export const rutas: Routes = [
  {
    path: 'estadisticas',
    loadChildren: () => import('./estadisticas/estadisticas.module').then( m => m.EstadisticasModule),
  },
  {
    path: 'empresas-autorizadas',
    loadChildren: () => import('./estadisticas/pages/empresas-autorizadas/empresas-autorizadas.module').then( m => m.EmpresasAutorizadasModule),
  },
  {
    path: 'taxis-registrados',
    loadChildren: () => import('./estadisticas/pages/taxis-registrados/taxis-registrados.module').then( m => m.TaxisRegistradosModule),
  },
  {
    path: 'asociaciones',
    loadChildren: () => import('./estadisticas/pages/asociaciones/asociaciones.module').then( m => m.AsociacionesModule),
  },
  {
    path: 'taxistas-registrados',
    loadChildren: () => import('./estadisticas/pages/taxistas-registrados/taxistas-registrados.module').then( m => m.TaxistasRegistradosModule),
  },
  {
    path: 'taxistas-licencia-vencida',
    loadChildren: () => import('./estadisticas/pages/taxistas-licencia-vencida/taxistas-licencia-vencida.module').then( m => m.TaxistasLicenciaVencidaModule),
  },
  {
    path: 'taxistas-sin-refrendar',
    loadChildren: () => import('./estadisticas/pages/taxistas-sin-refrendar/taxistas-sin-refrendar.module').then( m => m.TaxistasSinRefrendarModule),
  },
  {
    path: 'taxis-soat-vencido',
    loadChildren: () => import('./estadisticas/pages/taxis-soat-vencido/taxis-soat-vencido.module').then( m => m.TaxisSoatVencidoModule),
  },

  {
    path: 'taxis-rce-vencido',
    loadChildren: () => import('./estadisticas/pages/taxis-rce-vencido/taxis-rce-vencido.module').then( m => m.TaxisRceVencidoModule),
  },
  {
    path: 'taxis-rcc-vencido',
    loadChildren: () => import('./estadisticas/pages/taxis-rcc-vencido/taxis-rcc-vencido.module').then( m => m.TaxisRccVencidoModule),
  },
  {
    path: 'taxis-tecnomecanica-vencido',
    loadChildren: () => import('./estadisticas/pages/taxis-tecnomecanica-vencido/taxis-tecnomecanica-vencido.module').then( m => m.TaxisTecnomecanicaVencidoModule),
  },

  {
    path: 'documentos-vencidos',
    loadChildren: () => import('./estadisticas/pages/documentos-vencidos/documentos-vencidos.module').then( m => m.DocumentosVencidosModule),
  },
  {
    path: 'taxis-tarjeta-vigente',
    loadChildren: () => import('./estadisticas/pages/taxis-tarjeta-vigente/taxis-tarjeta-vigente.module').then( m => m.TaxisTarjetaVigenteModule),
  },
  {
    path: 'taxis-tarjeta-vencida',
    loadChildren: () => import('./estadisticas/pages/taxis-tarjeta-vencida/taxis-tarjeta-vencida.module').then( m => m.TaxisTarjetaVencidaModule),
  },
  {
    path: 'matriculas-canceladas',
    loadChildren: () => import('./estadisticas/pages/matriculas-canceladas/matriculas-canceladas.module').then( m => m.MatriculasCanceladasModule),
  },
  {
    path: 'quejas',
    loadChildren: () => import('./quejas/quejas.module').then( m => m.QuejasModule),
  },
  {
    path: 'buscar-conductores',
    loadChildren: () => import('./buscar-conductores/buscar-conductores.module').then( m => m.BuscarConductoresModule),
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosModule),
  },
  {
    path: 'perfil-de-usuario',
    loadChildren: () => import('./perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioModule),
  },
  {
    path: 'parque-automotor',
    loadChildren: () => import('./parque-automotor/parque-automotor.module').then( m => m.ParqueAutomotorModule),
  },
  {
    path: 'parametros',
    loadChildren: () => import('./parametros/parametros.module').then( m => m.ParametrosModule),
  },
  { path: '**', redirectTo: 'estadisticas', pathMatch: 'full' },
]
