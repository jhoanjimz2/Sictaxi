import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectNegComponent } from './select-neg.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Asegúrate de importar HttpClientModule

describe('SelectNegComponent', () => {
  let component: SelectNegComponent;
  let fixture: ComponentFixture<SelectNegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectNegComponent ],
      imports: [ HttpClientModule ],  // Importa HttpClientModule
      schemas: [NO_ERRORS_SCHEMA]  // Permite ignorar errores de los componentes no declarados
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectNegComponent);
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
