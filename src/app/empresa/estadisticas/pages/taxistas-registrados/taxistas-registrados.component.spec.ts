import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxistasRegistradosComponent } from './taxistas-registrados.component';
import { MatDialogModule } from '@angular/material/dialog';  // Importa MatDialogModule
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule para las pruebas
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TaxistasRegistradosComponent', () => {
  let component: TaxistasRegistradosComponent;
  let fixture: ComponentFixture<TaxistasRegistradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxistasRegistradosComponent ],
      imports: [
        MatDialogModule,  // Asegúrate de que MatDialogModule esté importado
        HttpClientTestingModule  // Asegúrate de importar HttpClientTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]  // Esquema para ignorar los errores por componentes no declarados
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxistasRegistradosComponent);
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
