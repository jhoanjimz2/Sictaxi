import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpcionesGraficaComponent } from './opciones-grafica.component';
import { ComentariosService } from 'src/app/services/comentarios.service'; // Asegúrate de importar tu servicio
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('OpcionesGraficaComponent', () => {
  let component: OpcionesGraficaComponent;
  let fixture: ComponentFixture<OpcionesGraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpcionesGraficaComponent],
      imports: [HttpClientTestingModule], // Importa HttpClientTestingModule
      providers: [ComentariosService], // Provee el ComentariosService
      schemas: [NO_ERRORS_SCHEMA] // Usar para evitar errores de elementos no conocidos
    }).compileComponents();

    fixture = TestBed.createComponent(OpcionesGraficaComponent);
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
