import { Routes }                from "@angular/router";

export const rutas: Routes = [
  {
    path: 'estadisticas',
    loadChildren: () => import('./estadisticas/estadisticas.module').then( m => m.EstadisticasModule),
  },
  {
    path: 'taxis-registrados',
    loadChildren: () => import('./estadisticas/pages/taxis-registrados/taxis-registrados.module').then( m => m.TaxisRegistradosModule),
  },
  {
    path: 'documentos-vencidos',
    loadChildren: () => import('./documentos-vencidos/documentos-vencidos.module').then( m => m.DocumentosVencidosModule),
  },
  {
    path: 'proximos-vencerse',
    loadChildren: () => import('./estadisticas/pages/proximos-vencerse/proximos-vencerse.module').then( m => m.ProximosVencerseModule),
  },
  {
    path: 'taxistas-registrados',
    loadChildren: () => import('./estadisticas/pages/taxistas-registrados/taxistas-registrados.module').then( m => m.TaxistasRegistradosModule),
  },
  {
    path: 'matriculas-canceladas',
    loadChildren: () => import('./estadisticas/pages/matriculas-canceladas/matriculas-canceladas.module').then( m => m.MatriculasCanceladasModule),
  },
  {
    path: 'buscar-conductores',
    loadChildren: () => import('./buscar-conductores/buscar-conductores.module').then( m => m.BuscarConductoresModule),
  },
  {
    path: 'agregar-conductor',
    loadChildren: () => import('./agregar-conductor/agregar-conductor.module').then( m => m.AgregarConductorModule),
  },
  {
    path: 'agregar-conductor/:id',
    loadChildren: () => import('./agregar-conductor/agregar-conductor.module').then( m => m.AgregarConductorModule),
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosModule),
  },
  {
    path: 'perfil-de-empresa',
    loadChildren: () => import('./perfil-empresa/perfil-empresa.module').then( m => m.PerfilEmpresaModule),
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
    path: 'alertas',
    loadChildren: () => import('./incidencias/incidencias.module').then( m => m.IncidenciasModule),
  },
  {
    path: 'desvinculaciones',
    loadChildren: () => import('./desvinculaciones/desvinculaciones.module').then(m => m.DesvinculacionesModule)
  },
  { path: '', redirectTo: 'estadisticas', pathMatch: 'full' },
  { path: '**', redirectTo: 'estadisticas', pathMatch: 'full' }
]
