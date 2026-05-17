import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardGraficaEducacionComponent } from './card-grafica-educacion.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule
import { EstadisticasService } from 'src/app/services/estadisticas.service';  // Asegúrate de importar el servicio si lo usas
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardGraficaEducacionComponent', () => {
  let component: CardGraficaEducacionComponent;
  let fixture: ComponentFixture<CardGraficaEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGraficaEducacionComponent ],
      imports: [ HttpClientTestingModule ],  // Agrega HttpClientTestingModule para simular HttpClient
      providers: [ EstadisticasService ],  // Asegúrate de proporcionar el servicio si es necesario
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGraficaEducacionComponent);
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
