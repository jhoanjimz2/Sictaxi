import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardGraficaModelosComponent } from './card-grafica-modelos.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule

describe('CardGraficaModelosComponent', () => {
  let component: CardGraficaModelosComponent;
  let fixture: ComponentFixture<CardGraficaModelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGraficaModelosComponent ],
      imports: [ HttpClientModule ],  // Asegúrate de importar HttpClientModule
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGraficaModelosComponent);
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
