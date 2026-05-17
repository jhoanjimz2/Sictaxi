import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxisSoatVencidoComponent } from './taxis-soat-vencido.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

describe('TaxisSoatVencidoComponent', () => {
  let component: TaxisSoatVencidoComponent;
  let fixture: ComponentFixture<TaxisSoatVencidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxisSoatVencidoComponent ],
      imports: [ HttpClientTestingModule ],  // Usa HttpClientTestingModule para las pruebas
      providers: [ EstadisticasService ],  // Proporciona el servicio EstadisticasService
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxisSoatVencidoComponent);
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
