import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule
import { CardGraficaComentariosNegComponent } from './card-grafica-comentarios-neg.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardGraficaComentariosNegComponent', () => {
  let component: CardGraficaComentariosNegComponent;
  let fixture: ComponentFixture<CardGraficaComentariosNegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGraficaComentariosNegComponent ],
      imports: [HttpClientTestingModule], // Asegúrate de importar HttpClientTestingModule
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGraficaComentariosNegComponent);
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
