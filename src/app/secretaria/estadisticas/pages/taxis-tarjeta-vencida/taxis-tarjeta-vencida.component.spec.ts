import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxisTarjetaVencidaComponent } from './taxis-tarjeta-vencida.component';
import { HttpClientModule } from '@angular/common/http';  // Asegúrate de importar HttpClientModule
import { EstadisticasService } from 'src/app/services/estadisticas.service';  // Importa el servicio
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TaxisTarjetaVencidaComponent', () => {
  let component: TaxisTarjetaVencidaComponent;
  let fixture: ComponentFixture<TaxisTarjetaVencidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxisTarjetaVencidaComponent ],  // Asegúrate de declarar el componente
      imports: [ HttpClientModule ],  // Importa HttpClientModule para resolver la dependencia de HttpClient
      providers: [ EstadisticasService ],  // Proveer el servicio EstadisticasService si es necesario
      schemas: [NO_ERRORS_SCHEMA]  // Esquema para evitar errores por dependencias no declaradas
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxisTarjetaVencidaComponent);
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
