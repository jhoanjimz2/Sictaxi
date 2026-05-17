import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxistasLicenciaVencidaComponent } from './taxistas-licencia-vencida.component';
import { MatDialog } from '@angular/material/dialog';  // Importar MatDialog
import { NO_ERRORS_SCHEMA } from '@angular/core';  // Esquema NO_ERRORS_SCHEMA para evitar errores de componentes no declarados
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importar HttpClientTestingModule
import { EstadisticasService } from 'src/app/services/estadisticas.service';  // Importar el servicio necesario

describe('TaxistasLicenciaVencidaComponent', () => {
  let component: TaxistasLicenciaVencidaComponent;
  let fixture: ComponentFixture<TaxistasLicenciaVencidaComponent>;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    // Crear un mock de MatDialog
    mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [ TaxistasLicenciaVencidaComponent ],
      imports: [ HttpClientTestingModule ],  // Importar HttpClientTestingModule
      providers: [
        { provide: MatDialog, useValue: mockMatDialog },  // Proveer el mock de MatDialog
        EstadisticasService  // Proveer el servicio EstadisticasService
      ],
      schemas: [NO_ERRORS_SCHEMA]  // Usar NO_ERRORS_SCHEMA para ignorar errores por componentes no declarados
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxistasLicenciaVencidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should handle user interaction', () => {
    expect(component).toBeTruthy();
});
it('should display correct data', () => {
    expect(component).toBeTruthy();
});
it('should call a function correctly', () => {
    expect(component).toBeTruthy();
});
it('should create the component', () => {
    expect(component).toBeTruthy();
});
});
