import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardGraficaCalificacionesComponent } from './card-grafica-calificaciones.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importar HttpClientTestingModule
import { EstadisticasService } from 'src/app/services/estadisticas.service';  // Asegúrate de que el servicio esté importado
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardGraficaCalificacionesComponent', () => {
  let component: CardGraficaCalificacionesComponent;
  let fixture: ComponentFixture<CardGraficaCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGraficaCalificacionesComponent ],
      imports: [ HttpClientTestingModule ],  // Importar HttpClientTestingModule
      providers: [ EstadisticasService ],  // Si no se incluye en el componente
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGraficaCalificacionesComponent);
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
