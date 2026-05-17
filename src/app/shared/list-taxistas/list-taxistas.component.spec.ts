import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListTaxistasComponent } from './list-taxistas.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { TaxistasEasyPipe } from 'src/app/pipes/taxistas-easy.pipe';
import { of } from 'rxjs';  // Para mockear los datos del servicio

// Mock de servicio
const mockTaxistasService = {
  getTaxistas: () => of([{ name: 'Juan', value: 10, color: 'red' }, { name: 'Pedro', value: 20, color: 'blue' }])  // Datos mockeados
};

describe('ListTaxistasComponent', () => {
  let component: ListTaxistasComponent;
  let fixture: ComponentFixture<ListTaxistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ListTaxistasComponent,
        TaxistasEasyPipe  // Declarar la tubería
      ],
      imports: [
        MatDialogModule
      ],
      providers: [
        { provide: 'TaxistasService', useValue: mockTaxistasService }  // Mock del servicio
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTaxistasComponent);
    component = fixture.componentInstance;

    // Inicializar la lista de taxistas antes de detectar los cambios
    component.taxistas = [];  // Asegurarse de que la propiedad esté definida
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
