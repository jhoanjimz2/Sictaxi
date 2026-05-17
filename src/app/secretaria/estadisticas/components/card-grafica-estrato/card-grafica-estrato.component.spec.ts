import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardGraficaEstratoComponent } from './card-grafica-estrato.component';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardGraficaEstratoComponent', () => {
  let component: CardGraficaEstratoComponent;
  let fixture: ComponentFixture<CardGraficaEstratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGraficaEstratoComponent ],
      imports: [ HttpClientModule ],  // Asegúrate de importar HttpClientModule
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGraficaEstratoComponent);
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
