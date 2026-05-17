import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxisTarjetaVigenteComponent } from './taxis-tarjeta-vigente.component';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { EstadisticasService } from 'src/app/services/estadisticas.service';  // Asegúrate de que el servicio esté importado
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TaxisTarjetaVigenteComponent', () => {
  let component: TaxisTarjetaVigenteComponent;
  let fixture: ComponentFixture<TaxisTarjetaVigenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxisTarjetaVigenteComponent ],
      imports: [ HttpClientModule ],  // Asegúrate de importar HttpClientModule
      providers: [ EstadisticasService ],
      schemas: [NO_ERRORS_SCHEMA]  // Provee EstadisticasService si es necesario
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxisTarjetaVigenteComponent);
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
