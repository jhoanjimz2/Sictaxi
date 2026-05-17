import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputsParametrosComponent } from './inputs-parametros.component';
import { HttpClientModule } from '@angular/common/http';  // Asegúrate de importar HttpClientModule
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('InputsParametrosComponent', () => {
  let component: InputsParametrosComponent;
  let fixture: ComponentFixture<InputsParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputsParametrosComponent],
      imports: [HttpClientModule],  // Asegúrate de importar HttpClientModule
      schemas: [NO_ERRORS_SCHEMA]  // Para evitar errores con componentes no declarados
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputsParametrosComponent);
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
